/* eslint-disable @typescript-eslint/unbound-method */
import { by, device, element, expect } from 'detox';
import * as path from 'path';
import { createCapture } from '../lib';

const projectRoot = path.resolve(__dirname, '../../');

// https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html
const languages = ['en'];

for (const locale of languages) {
  const { captureAsync, resetAppAsync } = createCapture({
    projectRoot,
    locale,
  });

  describe(locale, () => {
    beforeAll(resetAppAsync);

    beforeEach(async () => {
      await device.reloadReactNative();
    });

    it('should display a message', async () => {
      await expect(element(by.text('Welcome'))).toBeVisible();
      await captureAsync();
    });
  });
}
