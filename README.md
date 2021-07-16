# dependency-injection-decorator

A very simple way to inject dependencies using decorators. It's means that it allow us to implements a easy dependency inversion, using SOLID and Clean Architecture principles.

## Installation
1. Install package:
    ```
    npm install dependency-injection-decorator
    ```

## Using
You need to decorate your classes to allow later injection.
```ts
import { Injectable } from 'dependency-injection-decorator';

export interface IMyPrint {
  printMessage: (message: string) => void;
}

@Injectable()
class MyInjectablePrint implements IMyPrint {

  public printMessage(message: string): void {
    console.log(message);
  }
}
```

Afterwards, all decorated classes can be injected as an attribute in another class
```ts
import { Inject } from 'dependency-injection-decorator';

class TestingInjection {

  @Inject('MyInjectablePrint')
  private myInjectablePrintObject: IMyPrint;

  public doSomething() {
    this.myInjectablePrintObject.printMessage('Hello World');
  }
}
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/GuilhermeSevero/dependency-injection-decorator.


## License

The npm package is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
