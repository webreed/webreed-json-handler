// Copyright (c) Rotorz Limited. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root.


import {Handler} from "webreed-core/lib/plugin/Handler";


/**
 * Encodes and decodes JSON encoded data.
 */
export class JsonHandler implements Handler {

  public decode(encodedData: any, context: any): Promise<any> {
    let str = encodedData.toString();
    let data = JSON.parse(str);
    return Promise.resolve(data);
  }

  public encode(data: any, context: any): Promise<any> {
    let str = JSON.stringify(data);
    return Promise.resolve(str);
  }

}
