# Pivot table interview
This is a react project with typescipt.the major 3rd party plugin is `react-visibility-sensor` used to lazy load table cell data.

## Getting started.
 * ensure you have node , npm/yarn installed and an upto date browser
 * `npm install`
 * `npm run start`
 * visit `http://localhost:3000/`
 * The app was mostly tested using chrome/chromium.
  

## architectural overview.
The project contains only two class based components `Home` and `HomeItem`.Home draws the table and homeItem populates cells in the table.
homeItem checks if cell is in view to reduce memory usage before getting appropriate values from `data.json`.

Hooks for settting up network request would for know go into component did mount like `fetchDataFromNetwork` illustrates.

The sum has a slight bug.(to be fixed)


## Next steps.

1. Set up routing.
2. Choose a state management like redux, flux etc.
3. explore react components like `https://grid.glideapps.com/` that have been better optimized for loading millions of data.
4. look into probable use of web assembly, for filterring(searching) the list.


