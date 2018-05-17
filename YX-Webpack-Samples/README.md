### Commend List
1. install webpack/webpack-dev-server packages
```
npm i -g webpack@1.x webpack-dev-server@1.x

```

### Error Tips
1. Module not found: Error: Can't resolve '[module]' 
> Module not found: Error: Can't resolve 'react' 
```
npm i --dev-save react
```

> Module not found: Error: Can't resolve 'react-dom' 
```
npm i --dev-save react-dom
```


D:\Workspace\Project-GitHub\YX-WebThemeKit>webpack -h
webpack 3.6.0
Usage: https://webpack.js.org/api/cli/
Usage without config file: webpack <entry> [<entry>] <output>
Usage with config file: webpack

Config options:
  --config       Path to the config file
                         [string] [default: webpack.config.js or webpackfile.js]
  --config-name  Name of the config to use                              [string]
  --env          Environment passed to the config, when it is a function

Basic options:
  --context    The root directory for resolving entry point and stats
                                       [string] [default: The current directory]
  --entry      The entry point                                          [string]
  --watch, -w  Watch the filesystem for changes                        [boolean]
  --debug      Switch loaders to debug mode                            [boolean]
  --devtool    Enable devtool for better debugging experience (Example:
               --devtool eval-cheap-module-source-map)                  [string]
  -d           shortcut for --debug --devtool eval-cheap-module-source-map
               --output-pathinfo                                       [boolean]
  -p           shortcut for --optimize-minimize --define
               process.env.NODE_ENV="production"                       [boolean]
  --progress   Print compilation progress in percentage                [boolean]

Module options:
  --module-bind       Bind an extension to a loader                     [string]
  --module-bind-post                                                    [string]
  --module-bind-pre                                                     [string]

Output options:
  --output-path                 The output path for compilation assets
                                       [string] [default: The current directory]
  --output-filename             The output filename of the bundle
                                                   [string] [default: [name].js]
  --output-chunk-filename       The output filename for additional chunks
       [string] [default: filename with [id] instead of [name] or [id] prefixed]
  --output-source-map-filename  The output filename for the SourceMap   [string]
  --output-public-path          The public path for the assets          [string]
  --output-jsonp-function       The name of the jsonp function used for chunk
                                loading                                 [string]
  --output-pathinfo             Include a comment with the request for every
                                dependency (require, import, etc.)     [boolean]
  --output-library              Expose the exports of the entry point as library
                                                                        [string]
  --output-library-target       The type for exposing the exports of the entry
                                point as library                        [string]

Advanced options:
  --records-input-path       Path to the records file (reading)         [string]
  --records-output-path      Path to the records file (writing)         [string]
  --records-path             Path to the records file                   [string]
  --define                   Define any free var in the bundle          [string]
  --target                   The targeted execution environment         [string]
  --cache                    Enable in memory caching
                      [boolean] [default: It's enabled by default when watching]
  --watch-stdin, --stdin     Exit the process when stdin is closed     [boolean]
  --watch-aggregate-timeout  Timeout for gathering changes while watching
  --watch-poll               The polling interval for watching (also enable
                             polling)                                   [string]
  --hot                      Enables Hot Module Replacement            [boolean]
  --prefetch                 Prefetch this request (Example: --prefetch
                             ./file.js)                                 [string]
  --provide                  Provide these modules as free vars in all modules
                             (Example: --provide jQuery=jquery)         [string]
  --labeled-modules          Enables labeled modules                   [boolean]
  --plugin                   Load this plugin                           [string]
  --bail                     Abort the compilation on first error
                                                       [boolean] [default: null]
  --profile                  Profile the compilation and include information in
                             stats                     [boolean] [default: null]

Resolving options:
  --resolve-alias         Setup a module alias for resolving (Example:
                          jquery-plugin=jquery.plugin)                  [string]
  --resolve-extensions    Setup extensions that should be used to resolve
                          modules (Example: --resolve-extensions .es6,.js)
                                                                         [array]
  --resolve-loader-alias  Setup a loader alias for resolving            [string]

Optimizing options:
  --optimize-max-chunks      Try to keep the chunk count below a limit
  --optimize-min-chunk-size  Try to keep the chunk size above a limit
  --optimize-minimize        Minimize javascript and switches loaders to
                             minimizing                                [boolean]

Stats options:
  --color, --colors               Enables/Disables colors on the console
                                           [boolean] [default: (supports-color)]
  --sort-modules-by               Sorts the modules list by property in module
                                                                        [string]
  --sort-chunks-by                Sorts the chunks list by property in chunk
                                                                        [string]
  --sort-assets-by                Sorts the assets list by property in asset
                                                                        [string]
  --hide-modules                  Hides info about modules             [boolean]
  --display-exclude               Exclude modules in the output         [string]
  --display-modules               Display even excluded modules in the output
                                                                       [boolean]
  --display-max-modules           Sets the maximum number of visible modules in
                                  output                                [number]
  --display-chunks                Display chunks in the output         [boolean]
  --display-entrypoints           Display entry points in the output   [boolean]
  --display-origins               Display origins of chunks in the output
                                                                       [boolean]
  --display-cached                Display also cached modules in the output
                                                                       [boolean]
  --display-cached-assets         Display also cached assets in the output
                                                                       [boolean]
  --display-reasons               Display reasons about module inclusion in the
                                  output                               [boolean]
  --display-depth                 Display distance from entry point for each
                                  module                               [boolean]
  --display-used-exports          Display information about used exports in
                                  modules (Tree Shaking)               [boolean]
  --display-provided-exports      Display information about exports provided
                                  from modules                         [boolean]
  --display-optimization-bailout  Display information about why optimization
                                  bailed out for modules               [boolean]
  --display-error-details         Display details about errors         [boolean]
  --display                       Select display preset (verbose, detailed,
                                  normal, minimal, errors-only, none)   [string]
  --verbose                       Show more details                    [boolean]

Options:
  --help, -h     Show help                                             [boolean]
  --version, -v  Show version number                                   [boolean]
  --json, -j     Prints the result as JSON.                            [boolean]
