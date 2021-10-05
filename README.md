# Pivot table interview
This is a react project with typescipt.

## Getting started.
 * ensure you have node , npm/yarn installed and an upto date browser
 * `npm install`
 * `npm run start`
 * visit `http://localhost:3000/`
 * The app was ostly tested using chrome/chromium.
  

## architectural overview.
The project contains only two class based components `Home` and `HomeItem`.Home draws the table and homeItem populates cells in the table.
homeItem checks if cell is in view to reduce memory usage before getting appropriate values from `data.json`



## Next steps.

1. Set up routing.
2. Choose a state management like redux, flux etc.
3. explore react components like `https://grid.glideapps.com/` that have been better optimized for loading millions of data.
4. look into probable use of web assembly, for filterring(searching) the list.


