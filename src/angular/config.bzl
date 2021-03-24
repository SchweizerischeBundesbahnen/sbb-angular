entryPoints = [
    # do not sort
    "accordion",
    "autocomplete",
    "button",
    "captcha",
    "checkbox",
    "checkbox-panel",
    "core",
    "core/testing",
    "form-field",
    "icon",
    "icon/testing",
    "loading",
    "oauth",
    "radio-button",
    "select",
    "sidebar",
    "textarea",
    "textexpand",
    "time-input",
]

# List of all non-testing entry-points of the Angular package.
ANGULAR_ENTRYPOINTS = [
    ep
    for ep in entryPoints
    if not "/testing" in ep
]

# List of all testing entry-points of the Angular package.
ANGULAR_TESTING_ENTRYPOINTS = [
    ep
    for ep in entryPoints
    if not ep in ANGULAR_ENTRYPOINTS
]

# List of all non-testing entry-point targets of the Angular package.
ANGULAR_TARGETS = ["//src/angular"] + \
                  ["//src/angular/%s" % ep for ep in ANGULAR_ENTRYPOINTS]

# List of all testing entry-point targets of the Angular package.
ANGULAR_TESTING_TARGETS = ["//src/angular/%s" % ep for ep in ANGULAR_TESTING_ENTRYPOINTS]

ANGULAR_MARKDOWN_TARGETS = [
    "accordion",
    "autocomplete",
    "button",
    "captcha",
    "checkbox",
    "checkbox-panel",
    "form-field",
    "icon",
    "loading",
    "oauth",
    "radio-button",
    "select",
    "sidebar",
    "textarea",
    "textexpand",
    "time-input",
]
