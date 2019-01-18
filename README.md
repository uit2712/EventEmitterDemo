# EventEmitterDemo
-------------------EVENT EMITTER REACT NATIVE-------------------
- Why we use EventEmitter: Sometimes, we use child components and we trigger some events in those components, then we want to
let parent component know to do something we want. Example: I have parent component: App, child components: ListView->ListViewItem
->Detail, in child component Detail, I update ListViewItem info, then I want parent component knows to re-render ListView, so I
use EventEmitter and emit to parent component every time I press button UpdateInfo in child component Detail

ALL STEPS:
- Step 1: Create and render ListView
- Step 2: Add component HomeView, add navigators
- Step 3: Create component Detail allows to edit ListViewItem info
- Step 4: Declare EventEmitter and emit to parent component every time we press button Update in child component Detail

***YOUTUBE VIDEO: https://www.youtube.com/watch?v=kOEtPnodG7k
