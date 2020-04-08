entryPoints = [
  "arrow",
  "audio",
  "basic",
  "building",
  "career",
  "community",
  "core",
  "document",
  "experimental",
  "experimental/fpl",
  "experimental/fpl/him-cus",
  "experimental/fpl/timetable-attributes",
  "experimental/fpl/timetable-products",
  "experimental/kom",
  "experimental/kom/arrow",
  "experimental/kom/audio",
  "experimental/kom/basic",
  "experimental/kom/building",
  "experimental/kom/career",
  "experimental/kom/community",
  "experimental/kom/document",
  "experimental/kom/hardware",
  "experimental/kom/installation",
  "experimental/kom/leisure",
  "experimental/kom/location",
  "experimental/kom/navigation",
  "experimental/kom/station",
  "experimental/kom/status",
  "experimental/kom/ticket",
  "experimental/kom/timetable",
  "experimental/kom/transport",
  "experimental/kom/user",
  "experimental/kom/weather",
  "experimental/social-media",
  "experimental/_meta",
  "hardware",
  "him-cus",
  "installation",
  "leisure",
  "location",
  "navigation",
  "social-media",
  "station",
  "status",
  "ticket",
  "timetable",
  "timetable-attributes",
  "timetable-products",
  "transport",
  "user",
  "weather",
]

# List of all non-testing entry-points of the Icons package.
ICONS_ENTRYPOINTS = [
    ep
    for ep in entryPoints
    if not "/testing" in ep
]

# List of all testing entry-points of the Icons package.
ICONS_TESTING_ENTRYPOINTS = [
    ep
    for ep in entryPoints
    if not ep in ICONS_ENTRYPOINTS
]

# List of all non-testing entry-point targets of the Icons package.
ICONS_TARGETS = ["//src/icons"] + \
                   ["//src/icons/%s" % ep for ep in ICONS_ENTRYPOINTS]

# List of all testing entry-point targets of the Icons package.
ICONS_TESTING_TARGETS = ["//src/icons/%s" % ep for ep in ICONS_TESTING_ENTRYPOINTS]

ICONS_MARKDOWN_TARGETS = [
]