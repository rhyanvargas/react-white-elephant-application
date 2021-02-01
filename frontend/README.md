sketch/mockup: https://jamboard.google.com/d/1nuCY6d_-fl38jrKmp9ai3fPngikdjzvgLL13yYrwkCg/viewer?f=0

# Feature Checklist (per component)

## PlayerList

- ~~Show `PlayerInfo` details: Player name, gift image and gift name~~

## PanelComponent

- ~~Show `playerUp` info when they are selected~~

## ActionBar

- ~~If Player selects `gift`, and it has a `currentHolder`, only show "Steal" button `ActionBar`~~
- ~~Open Gift: `handleOpenGiftClick()`~~
- ~~Steal Gift: `handleStealGiftClick()`~~
  - ~~After Confirming to steal via `window.confirm()`:~~
    - ~~Set `currentGift` of `prevPlayer` to `null`~~
    - ~~Add 1 to `steals` of `giftToSteal`~~
    - ~~Set `currentHolder`of `giftToSteal`~~
    - ~~Set `playerUp` to `prevPlayer`~~

## GiftList

- ~~Determine when the game has ended~~
- ~~Reset `selectedGift` to `''` when `nextplayer()` is called~~
- ~~Prevent Player from picking the gift their own~~
- ~~After Player opens or steals, go to next player~~

## GiftCard

# Refactor

- Convert `GiftCard` and `PanelComponent` into a [Reusable Component](https://scrimba.com/learn/frontend/react-children-cKp2a3cE) called `CardComponent`, so that styles are the same, but structure is flexible
- Refactor and Organize Gameplay/Business Rules:
  - Use Reducer
  - Seperate View layer and business logic from components
- Setup Routes
  - /Login
  - /game
  - /summary

# Future Enhancements

- Create Login/authentication
- Integrate Gsheets (DB)
- Add onboarding ( Profile completion )
- Implement CSS themeing:
  - [Tailwind CSS/UI](https://tailwindui.com/preview)
  - Style Gift Card to use this [Tilt.js](https://gijsroge.github.io/tilt.js/)
- Design `PlayerInfo` component to look like amazon cart panel

# Challenges / Learnings

## `Next Player` button

For some reason, I was finding this a little tricky to do. My first attempt was to do the `push and shift` method on `prevPlayers` array, but that didn't work.

Finally, I realized I forgot to do a basic `ES6 Shallow Copy` process and first clone the `prevPlayers` array, then perform the array manipulation. Here is the working code:

```
setPlayers((prevPlayers) => {
      const newArr = [...prevPlayers];
      newArr.push(newArr.shift());
      return newArr;
    });
```

## Updating state for only 1 `GiftCard` (not all items)

**TODO: i'll come back to this**

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
