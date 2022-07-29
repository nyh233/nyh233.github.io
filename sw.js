/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/07/16/hello-world/index.html","cac1407959b28a384d92dfdd9db2b8eb"],["/2022/07/16/minecraftFrp/1.jpg","e75cff4fe493f6d11624dbf327881927"],["/2022/07/16/minecraftFrp/2.jpg","c2b65f7000073cb9cba95b0c2a73dcb0"],["/2022/07/16/minecraftFrp/3.jpg","df33f26baba97b690b74ec83ba720370"],["/2022/07/16/minecraftFrp/4.jpg","9a22b0f2c59877565eec3c15acf1498a"],["/2022/07/16/minecraftFrp/index.html","b6d9329abe19f5625e15c61df46a2e3e"],["/2022/07/16/minecraftFrp/top.jpg","490eddacccf5122dd7b5882331f1ee14"],["/2022/07/16/香橙派搭建我的世界BE服务器/1.jpg","fd9040e5c936ca6bd5a94a1545058127"],["/2022/07/16/香橙派搭建我的世界BE服务器/2.jpg","7c0c9865849603c94936e88e2f28a764"],["/2022/07/16/香橙派搭建我的世界BE服务器/3.jpg","0aa99f9fdee16858a0b993f91941aa8c"],["/2022/07/16/香橙派搭建我的世界BE服务器/index.html","a3f4ac28ba0984e6a12fa8d66566a0e1"],["/2022/07/17/xcpwangpan/1.jpg","fcfe7e142f4779598ca3fe140ab71d36"],["/2022/07/17/xcpwangpan/2.jpg","9afd6d8d622b04ddfff568fa2f8551d5"],["/2022/07/17/xcpwangpan/3.jpg","caec2823c9f65d6c6285a281f0c23462"],["/2022/07/17/xcpwangpan/index.html","1b67d899f1b7dcba0b26e208d9cc78ab"],["/2022/07/17/xcpwangpan/top-1.jpg","7955a142850ed3152733ffa908c4c769"],["/2022/07/18/xcpbk/index.html","1527c325e84aee02f34ff0a316e14c11"],["/2022/07/21/xcpxt/1.jpg","1ce972deda58d46dbb8141f12b74a189"],["/2022/07/21/xcpxt/2.jpg","881322afaf69e6383e534f5f85860552"],["/2022/07/21/xcpxt/3.jpg","53ab4c7131dbf65ed1d4848ee21b0fd4"],["/2022/07/21/xcpxt/4.jpg","afb6d555a415b14fc6cbfe4b502217f1"],["/2022/07/21/xcpxt/5.jpg","f41d5dd77cabcefceb82a1bc765995a8"],["/2022/07/21/xcpxt/index.html","582669bc754e69be195eb0c3bb8446b2"],["/2022/07/29/tasjc/1.jpg","8ea2ad2db3068e0482919a9c3973fb73"],["/2022/07/29/tasjc/10.jpg","76879a00af3ea60348b31239bbb1da4d"],["/2022/07/29/tasjc/11.jpg","b8823474a56cb977ebf82b49ca23d684"],["/2022/07/29/tasjc/2.jpg","ff8c46f33861d51837c5bca98c54cc83"],["/2022/07/29/tasjc/3.jpg","b233a7299bc816c57155079a253f6cc2"],["/2022/07/29/tasjc/4.jpg","ab0b6e2a5f5da7d827dd4a9dbac17def"],["/2022/07/29/tasjc/5.jpg","ff6c431273dfbf941a57263c2cb250c1"],["/2022/07/29/tasjc/6.jpg","1fa3b1e64f83ffccc583161fc1c0cd19"],["/2022/07/29/tasjc/7.jpg","fae1ba148a2448f54575a718a3cdc207"],["/2022/07/29/tasjc/8.jpg","546934c6c986e7c2cb9ed5baa6091af7"],["/2022/07/29/tasjc/9.jpg","78e1ce9887ad83512d2b691cbf45e0af"],["/2022/07/29/tasjc/index.html","10656e7275b7b7944f61733441c673e2"],["/about/anlian.jpg","089bad690aafdc952c2659597f2b0bbe"],["/about/index.html","e8e627786eb7b2f6183fe5b2237d529a"],["/archives/2022/07/index.html","f7d4e2683e0e17c65a13240bbf6ee3a2"],["/archives/2022/index.html","e6ccf009df455c613c6048bd2ace2160"],["/archives/index.html","b502c38ccd7f2ba3054ca458d72fd606"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/TAS/index.html","4ffe299b24170eb9842d41a97d14b7c9"],["/categories/index.html","958dbeae60a7613884181dabd611b016"],["/categories/香橙派/index.html","c53e0b4dd2e8efebd4051fd78613b94c"],["/css/index.css","752c5fa45dc58af61999a88dbf2a3294"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/anlian.jpg","089bad690aafdc952c2659597f2b0bbe"],["/img/awa.jpg","0ccab0b1d3c909b4c29c85b2705556b4"],["/img/bilibili.png","5676787f68b81da17963b8d2e0fadccb"],["/img/favicon.png","49520876817f9decd0bf186ea0655f0d"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index.jpg","59002c2464b7d7080f66c0d997db2ff9"],["/img/loading.gif","98f69872665a96d3933d0fb627994b8a"],["/img/top1.jpg","c971b441992638ea7473deedfceb0d1b"],["/img/top2.jpg","62c7304bd703f6f86f07496fceb9a386"],["/img/top3-2.jpg","7955a142850ed3152733ffa908c4c769"],["/img/top3.jpg","151e429475d930b1d0bc2237d54c5922"],["/img/top4-2.jpg","b7b903eb565c03d298fbbc7a3db9586b"],["/img/top4.jpg","89d8ced200efd08ade6ee4a7b1b2d353"],["/img/top5-2.jpg","0b5b67c8a84aa44b2b5a17cc4b0b770a"],["/img/top5.jpg","bb29b38522ac1211d849286259c56fac"],["/index.html","c456061ec0cc1ec4e2495888843fa37a"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","e521801753e5211803bdb3c4f4ecfe5c"],["/messageboard/index.html","b1905f70e0003b83fc7f020b50684373"],["/sw-register.js","f9423f0b0d866d74271804898b590737"],["/tags/BE/index.html","f30b07bfc6ef6571eb6ea97fef978ed4"],["/tags/MySQL/index.html","01f1070c5f024e917ec589b681b1fafa"],["/tags/Sakura-Frp/index.html","c7c03ce17353ba10bb4e6daf9c819238"],["/tags/TAS/index.html","0e9d551016ffd6d0432d67bf10fc033c"],["/tags/Typecho/index.html","d03d7096040f8cc322cc2c0fc1835cfa"],["/tags/Win32DiskImager/index.html","67e4918784f74418f8aa5937d8d29b15"],["/tags/frp/index.html","ac3f9b3e8ce1a9b9a799f84daf6968b7"],["/tags/index.html","39c4a02e668a1813b3279dfc01854eee"],["/tags/php/index.html","e8feb41ed81d8ee2e2e982750ac4c8f4"],["/tags/phpMyAdmin/index.html","734b2275f69e00e2d26103b8e3b1c948"],["/tags/ubuntu/index.html","ac3b6497ae22afd977646416bc6f04d0"],["/tags/内网穿透/index.html","6524aaa6bcbda36b39cf0de7c52a551e"],["/tags/博客/index.html","6149b7d9cb2857bcd06a4014ee132727"],["/tags/工具辅助速通/index.html","c1eecbe3df20be66cb068bae8cf21b7a"],["/tags/我的世界/index.html","5c8a17d99d51dfc79bbb911a3f11f2c2"],["/tags/教程/index.html","255deb4f52397be23a723b4867df3f4a"],["/tags/游戏/index.html","fac38e6ca0f45ca220b77d4a2454ae8f"],["/tags/知识/index.html","56a0071b56358d075295dd22ed0cb15b"],["/tags/系统/index.html","5565378f8ff5b32c30d463217b566f7b"],["/tags/网盘/index.html","3e5cd29eeb652be9b3ccff200ad232f7"],["/tags/超级马里奥/index.html","61b39e3e24106e81dee6034543f9aa07"],["/tags/香橙派/index.html","415ec6920046a4cca59db6d123a2df9c"],["/timeline/index.html","0a167d7566d5f30f81be5a824887ca98"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
