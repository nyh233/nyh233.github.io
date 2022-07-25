/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/07/16/hello-world/index.html","89998d82043e9bbcb477b8ea13d622b1"],["/2022/07/16/minecraftFrp/1.jpg","e75cff4fe493f6d11624dbf327881927"],["/2022/07/16/minecraftFrp/2.jpg","c2b65f7000073cb9cba95b0c2a73dcb0"],["/2022/07/16/minecraftFrp/3.jpg","df33f26baba97b690b74ec83ba720370"],["/2022/07/16/minecraftFrp/4.jpg","9a22b0f2c59877565eec3c15acf1498a"],["/2022/07/16/minecraftFrp/index.html","027dab8ca679b8297a413ad53de91272"],["/2022/07/16/minecraftFrp/top.jpg","490eddacccf5122dd7b5882331f1ee14"],["/2022/07/16/香橙派搭建我的世界BE服务器/1.jpg","fd9040e5c936ca6bd5a94a1545058127"],["/2022/07/16/香橙派搭建我的世界BE服务器/2.jpg","7c0c9865849603c94936e88e2f28a764"],["/2022/07/16/香橙派搭建我的世界BE服务器/3.jpg","0aa99f9fdee16858a0b993f91941aa8c"],["/2022/07/16/香橙派搭建我的世界BE服务器/index.html","c635b8b71221b12f3b3743efc2476ab8"],["/2022/07/17/xcpwangpan/1.jpg","fcfe7e142f4779598ca3fe140ab71d36"],["/2022/07/17/xcpwangpan/2.jpg","9afd6d8d622b04ddfff568fa2f8551d5"],["/2022/07/17/xcpwangpan/3.jpg","caec2823c9f65d6c6285a281f0c23462"],["/2022/07/17/xcpwangpan/index.html","aa9b7e7a1f54241570d4a686f8f91895"],["/2022/07/17/xcpwangpan/top-1.jpg","7955a142850ed3152733ffa908c4c769"],["/2022/07/18/xcpbk/index.html","1d3c586e3a21b4eed7c18c0531f2d790"],["/2022/07/21/xcpxt/1.jpg","1ce972deda58d46dbb8141f12b74a189"],["/2022/07/21/xcpxt/2.jpg","881322afaf69e6383e534f5f85860552"],["/2022/07/21/xcpxt/3.jpg","53ab4c7131dbf65ed1d4848ee21b0fd4"],["/2022/07/21/xcpxt/4.jpg","afb6d555a415b14fc6cbfe4b502217f1"],["/2022/07/21/xcpxt/5.jpg","f41d5dd77cabcefceb82a1bc765995a8"],["/2022/07/21/xcpxt/index.html","f979f66c32f4a5de7ee0b5d53abf2221"],["/about/anlian.jpg","089bad690aafdc952c2659597f2b0bbe"],["/about/index.html","f8f43dc6b33b5004b35d948805eeb8ab"],["/archives/2022/07/index.html","1d87a067f704c33f9c7fa77ab0cdc319"],["/archives/2022/index.html","d18aba42b17984680f5eaf8a9aa397f0"],["/archives/index.html","94fca0f20613cf028c795a486e6f6e0c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","86c28df01031152282595dffa9ea3d3b"],["/categories/香橙派/index.html","4e92754e64c960ea090a10f9a3cfe8e3"],["/css/index.css","752c5fa45dc58af61999a88dbf2a3294"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/anlian.jpg","089bad690aafdc952c2659597f2b0bbe"],["/img/awa.jpg","0ccab0b1d3c909b4c29c85b2705556b4"],["/img/bilibili.png","5676787f68b81da17963b8d2e0fadccb"],["/img/favicon.png","49520876817f9decd0bf186ea0655f0d"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index.jpg","59002c2464b7d7080f66c0d997db2ff9"],["/img/loading.gif","98f69872665a96d3933d0fb627994b8a"],["/img/top1.jpg","c971b441992638ea7473deedfceb0d1b"],["/img/top2.jpg","62c7304bd703f6f86f07496fceb9a386"],["/img/top3-2.jpg","7955a142850ed3152733ffa908c4c769"],["/img/top3.jpg","151e429475d930b1d0bc2237d54c5922"],["/img/top4-2.jpg","b7b903eb565c03d298fbbc7a3db9586b"],["/img/top4.jpg","89d8ced200efd08ade6ee4a7b1b2d353"],["/img/top5-2.jpg","0b5b67c8a84aa44b2b5a17cc4b0b770a"],["/img/top5.jpg","bb29b38522ac1211d849286259c56fac"],["/index.html","f30bee2e6e62aa7aabd538295f249aaf"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","63b87e8a8fc7e097adcebe5ebe78953a"],["/messageboard/index.html","848712b1ef71ce8298e689c3d696c08e"],["/sw-register.js","853d04b83b0367d3b3c26876bd791ce8"],["/tags/BE/index.html","1265d7ecb7c3d9d679e4d8de71663368"],["/tags/MySQL/index.html","149c1c4279a724826c74fdc968407cd2"],["/tags/Sakura-Frp/index.html","60dd1a3d6b76dcb76860809559a7a401"],["/tags/Typecho/index.html","30791e7f73fed9f46e9eee6bc751ef6c"],["/tags/Win32DiskImager/index.html","ec54e9bdb07f8f29f4c0a9ff958bbf2d"],["/tags/frp/index.html","992cc18041f592dddbd523eeced3dd78"],["/tags/index.html","ba628a8632633eda53bae49e673779c3"],["/tags/php/index.html","31625b18c0e8e075a1f324909334a1b7"],["/tags/phpMyAdmin/index.html","b10e0da979eafe65d2bb038744d4dab7"],["/tags/ubuntu/index.html","b44aabb428754286d8a535f18ab96756"],["/tags/内网穿透/index.html","35b8abcebc0be7f88c098018fbd22e77"],["/tags/博客/index.html","075a31e6011e806e5b1827c14458168a"],["/tags/我的世界/index.html","b4125ee15883e57240e06461a3267bc0"],["/tags/教程/index.html","493ef98c992d25570f43c09ef4714a70"],["/tags/游戏/index.html","fcb00e67802d89734509f376f36f1436"],["/tags/知识/index.html","864653fddf55a58402ec214141e77cdd"],["/tags/系统/index.html","c333f631482434e95737f6656ab5159d"],["/tags/网盘/index.html","a3958b364c8080db46ff8904f15ac7e7"],["/tags/香橙派/index.html","07d8c76cc7cc08e651d60cade5b4b775"],["/timeline/index.html","bb41a1adfcff7d0c256c8caf759055ec"]];
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
