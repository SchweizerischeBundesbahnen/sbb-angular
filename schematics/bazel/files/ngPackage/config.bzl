entryPoints = [<% for (let entryPoint of entryPoints) { %>
  "<%= entryPoint %>",<% } %>
]

# List of all non-testing entry-points of the <%= capitalize(name) %> package.
<%= uc(name) %>_ENTRYPOINTS = [
    ep
    for ep in entryPoints
    if not "/testing" in ep
]

# List of all testing entry-points of the <%= capitalize(name) %> package.
<%= uc(name) %>_TESTING_ENTRYPOINTS = [
    ep
    for ep in entryPoints
    if not ep in <%= uc(name) %>_ENTRYPOINTS
]

# List of all non-testing entry-point targets of the <%= capitalize(name) %> package.
<%= uc(name) %>_TARGETS = ["//src/material"] + \
                   ["//src/material/%s" % ep for ep in <%= uc(name) %>_ENTRYPOINTS]

# List of all testing entry-point targets of the <%= capitalize(name) %> package.
<%= uc(name) %>_TESTING_TARGETS = ["//src/material/%s" % ep for ep in <%= uc(name) %>_TESTING_ENTRYPOINTS]
