import { context } from './context';

class TestUtils {
  overloadInjectable(key: string, newObject: any): void {
    context.setInjectable(key, newObject)
  }
}

export const testUtils = new TestUtils();
