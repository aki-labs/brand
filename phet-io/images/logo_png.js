/* eslint-disable */
import simLauncher from '../../../joist/js/simLauncher.js';
const image = new Image();
const unlock = simLauncher.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;