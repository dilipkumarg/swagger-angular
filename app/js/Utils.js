/*
 * Copyright (c) 2013 - 2014 WaveMaker, Inc. All Rights Reserved.
 *
 * This software is the confidential and proprietary information of WaveMaker, Inc.
 * You shall not disclose such Confidential Information and shall use it only in accordance
 * with the terms of the source code license agreement you entered into with WaveMaker, Inc.
 */
var Util = (function() {
    function getBaseUrl(isRelative) {
        var url = window.location.protocol + "//" + window.location.host,
            slash = "/";

        if (isRelative) {
            var pathName = window.location.pathname,
                parts = pathName.split(slash),
                lastPart = (parts.length - 1);
            if (parts.length > 0) {
                // checking if last part if empty string. if then removing that empty part.
                if (parts[lastPart].length === 0) {
                    parts.pop();
                    lastPart = (parts.length - 1);
                }
                if (parts.length > 0) {
                    // checking for dot in the last part of. if it is there then we are removing that part.
                    if (parts[lastPart].indexOf(".") !== -1) {
                        parts.pop();
                    }
                    for(var i = 0; i < parts.length; i++) {
                        if(parts[i].length > 0) {
                            url = url + slash + parts[i];
                        }
                    }
                }
            }
            url = (url.charAt(url.length - 1) === slash) ? url : (url + slash);
        }
        return url;
    }

    return  {
        baseUrl : function(isRelative) {
            return getBaseUrl(isRelative);
        }
    }
})();
