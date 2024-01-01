import os
from time import sleep

from rosreestr2coord.export import area_json_output, batch_csv_output, batch_json_output
from rosreestr2coord.export import area_kml_output, area_dxf_output, batch_kml_output, batch_dxf_output, feat2csv
from rosreestr2coord.parser import Area
from rosreestr2coord.utils import TimeoutException


def batch_parser(
    codes, with_log=False, file_name="example", areas=None, output=os.path.join("output"), repeat=0, delay=1, **kwargs
):
    if areas is None:
        areas = []
    with_error = []
    with_no_coord = []
    success = 0
    print("================================")
    print("Launched parsing of %i areas:" % len(codes))
    print("================================")
    need_sleep = 0
    features = []
    kmls = []
    dxfs = []
    for c in codes:
        area = None
        code = c.strip("'\" \t\n\r")
        print("{}".format(code), end="")
        try:
            sleep(need_sleep)
            area = Area(code, with_log=with_log, **kwargs)
            need_sleep = delay
            if len(area.get_coord()):
                print(" - ok", end="")
                success += 1
            else:
                print(" - no coord", end="")
                with_no_coord.append(area)
        except TimeoutException:
            print(" - error")
            print("Your IP is probably blocked. Try later or use proxy")
            break
        except Exception:
            print(" - error", end="")
            with_error.append(code)

        percent = ((success + len(with_error) + len(with_no_coord)) / len(codes)) * 100
        print(", %i%%" % percent)

        if area:
            areas.append(area)
            feature = area_json_output(output, area)
            kml = area_kml_output(output, area)
            if kml : kmls.append(kml)
            dxf = area_dxf_output(output, area)
            if dxf : dxfs.append(dxf)
            if feature:
                features.append(feature)
            # area_csv_output(output, area)
        feat2csv(output, areas=areas)
    print("=================")
    print("Parsing complete:")
    print("  success     : %i" % success)
    print("  error       : %i" % len(with_error))
    print("  no_coord    : %i" % len(with_no_coord))
    print("-----------------")

    if len(with_error) and repeat:
        print("Retries parse areas with error")
        batch_parser(
            with_error,
            with_log=with_log,
            file_name=file_name,
            repeat=repeat - 1,
            areas=areas,
            output=output,
            delay=delay,
            **kwargs
        )
    else:
        path = batch_csv_output(output, areas, file_name)
        if len(with_no_coord):
            path = batch_csv_output(output, with_no_coord, "%s_no_coord" % file_name)
            print("Create output for no_coord complete: %s" % path)
        if len(features):
            path = batch_json_output(output, areas, file_name)
            print("Create output GEOJSON complete: %s" % path)
        if len(kmls):
            path = batch_kml_output(output, kmls, file_name)
            print("Create output KML complete: %s" % path)
        if len(dxfs):
            path = batch_dxf_output(output, dxfs, file_name)
            print("Create output DXF complete: %s" % path)
        if len(with_error):
            print("-----------------")
            print("Error list:")
            for e in with_error:
                print(e)
