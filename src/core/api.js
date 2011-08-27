/**
 *
 * This product includes the connect-js created by Facebook.
 *  Copyright (c) 2008 Facebook Inc, http://www.facebook.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 *
 *
 * @provides traffy.api
 */

Traffy.provide('ApiMapping',  {
  'getcctvimg':  'getcctvimg',
  'getcctv':  'getCCTV',
  'getvms':  'getVMS',
  'getvmsimg':  'getvmsimg',
  'getincident':  'getIncident',
  'getlinkallinfo':  'getLinkALLInfo',
  'getrainforecast':  'getRainForecast',
  'gettrafficcongestion':  'getCL',
  'getlinkinfo':  'getLinkInfo',
  'gettraveltime':  'getTravelTime',
  //postAPI
  'postgpsdata':  'postGPSData',
  'postincident':  'postIncident',
});

Traffy.provide('', {
    api: function(api, callback, options) {
        var toString = Object.prototype.toString;
        var current_service_endpoint = Traffy._service_endpoint[0];
        options = options || { header: 'js', format: 'js' };
        var optionString = Traffy.Util.makeOptions(options);
        if (typeof api === 'string') {

          $.get(current_service_endpoint+ '/traffy/wrapper/'+ api +'/?'+ optionString, callback);
        }
        else {
            throw new Error('Api Must be string.');
        }
    }
});
