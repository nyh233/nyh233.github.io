/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/07/16/hello-world/index.html","cac1407959b28a384d92dfdd9db2b8eb"],["/2022/07/16/minecraftFrp/1.jpg","e75cff4fe493f6d11624dbf327881927"],["/2022/07/16/minecraftFrp/2.jpg","c2b65f7000073cb9cba95b0c2a73dcb0"],["/2022/07/16/minecraftFrp/3.jpg","df33f26baba97b690b74ec83ba720370"],["/2022/07/16/minecraftFrp/4.jpg","9a22b0f2c59877565eec3c15acf1498a"],["/2022/07/16/minecraftFrp/index.html","86665c9560321cfe59804053844fe4ac"],["/2022/07/16/minecraftFrp/top.jpg","490eddacccf5122dd7b5882331f1ee14"],["/2022/07/16/香橙派搭建我的世界BE服务器/1.jpg","fd9040e5c936ca6bd5a94a1545058127"],["/2022/07/16/香橙派搭建我的世界BE服务器/2.jpg","7c0c9865849603c94936e88e2f28a764"],["/2022/07/16/香橙派搭建我的世界BE服务器/3.jpg","0aa99f9fdee16858a0b993f91941aa8c"],["/2022/07/16/香橙派搭建我的世界BE服务器/index.html","065eb68a520aa23d5db207d9a6d6f78b"],["/2022/07/17/xcpwangpan/1.jpg","fcfe7e142f4779598ca3fe140ab71d36"],["/2022/07/17/xcpwangpan/2.jpg","9afd6d8d622b04ddfff568fa2f8551d5"],["/2022/07/17/xcpwangpan/3.jpg","caec2823c9f65d6c6285a281f0c23462"],["/2022/07/17/xcpwangpan/index.html","8d64db55172aa95ca98fd1afdd3bd868"],["/2022/07/17/xcpwangpan/top-1.jpg","7955a142850ed3152733ffa908c4c769"],["/2022/07/18/xcpbk/index.html","1527c325e84aee02f34ff0a316e14c11"],["/2022/07/21/xcpxt/1.jpg","1ce972deda58d46dbb8141f12b74a189"],["/2022/07/21/xcpxt/2.jpg","881322afaf69e6383e534f5f85860552"],["/2022/07/21/xcpxt/3.jpg","53ab4c7131dbf65ed1d4848ee21b0fd4"],["/2022/07/21/xcpxt/4.jpg","afb6d555a415b14fc6cbfe4b502217f1"],["/2022/07/21/xcpxt/5.jpg","f41d5dd77cabcefceb82a1bc765995a8"],["/2022/07/21/xcpxt/index.html","f172e6b9a79e9bc4d4e94dbac7dc5f04"],["/2022/07/29/tasjc/1.jpg","8ea2ad2db3068e0482919a9c3973fb73"],["/2022/07/29/tasjc/10.jpg","76879a00af3ea60348b31239bbb1da4d"],["/2022/07/29/tasjc/11.jpg","b8823474a56cb977ebf82b49ca23d684"],["/2022/07/29/tasjc/2.jpg","ff8c46f33861d51837c5bca98c54cc83"],["/2022/07/29/tasjc/3.jpg","b233a7299bc816c57155079a253f6cc2"],["/2022/07/29/tasjc/4.jpg","ab0b6e2a5f5da7d827dd4a9dbac17def"],["/2022/07/29/tasjc/5.jpg","ff6c431273dfbf941a57263c2cb250c1"],["/2022/07/29/tasjc/6.jpg","1fa3b1e64f83ffccc583161fc1c0cd19"],["/2022/07/29/tasjc/7.jpg","fae1ba148a2448f54575a718a3cdc207"],["/2022/07/29/tasjc/8.jpg","546934c6c986e7c2cb9ed5baa6091af7"],["/2022/07/29/tasjc/9.jpg","78e1ce9887ad83512d2b691cbf45e0af"],["/2022/07/29/tasjc/index.html","e6fb3583836da46308a96f4d3ba44a8d"],["/about/anlian.jpg","089bad690aafdc952c2659597f2b0bbe"],["/about/index.html","bfaf0d91a102601d31c37929df402c41"],["/archives/2022/07/index.html","05cba62833ad604145828138356f50be"],["/archives/2022/index.html","5e10853ba9c88a33d569486d6d2f8051"],["/archives/index.html","1ffc2d370fcda55cd2f2393cef1b553e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/TAS/index.html","9546dae1e6645083ae94d6254d68f0ba"],["/categories/index.html","8611a254d2fafbf8a061037849123ba1"],["/categories/香橙派/index.html","6b67273282e769d2aad5c262f936ac50"],["/css/index.css","752c5fa45dc58af61999a88dbf2a3294"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/TAStop1-2.jpg","1a4e56d78aece4b6c645ead5883a430b"],["/img/TAStop1.jpg","fe83341cdb77bba49427ae3dfc9bcb54"],["/img/anlian.jpg","089bad690aafdc952c2659597f2b0bbe"],["/img/awa.jpg","0ccab0b1d3c909b4c29c85b2705556b4"],["/img/bilibili.png","5676787f68b81da17963b8d2e0fadccb"],["/img/favicon.png","49520876817f9decd0bf186ea0655f0d"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/index.jpg","59002c2464b7d7080f66c0d997db2ff9"],["/img/loading.gif","98f69872665a96d3933d0fb627994b8a"],["/img/top1.jpg","c971b441992638ea7473deedfceb0d1b"],["/img/top2.jpg","62c7304bd703f6f86f07496fceb9a386"],["/img/top3-2.jpg","7955a142850ed3152733ffa908c4c769"],["/img/top3.jpg","151e429475d930b1d0bc2237d54c5922"],["/img/top4-2.jpg","b7b903eb565c03d298fbbc7a3db9586b"],["/img/top4.jpg","89d8ced200efd08ade6ee4a7b1b2d353"],["/img/top5-2.jpg","0b5b67c8a84aa44b2b5a17cc4b0b770a"],["/img/top5.jpg","bb29b38522ac1211d849286259c56fac"],["/index.html","fefe41f04d4d6cd33b347439032a74ef"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","08ddc2733196bfc4a56abe80b4204630"],["/messageboard/index.html","82052c9f440fcd5cb84bed9f003f0021"],["/sw-register.js","13662cf88642d0d050fbe8e5c39080a8"],["/tags/BE/index.html","ffdd7433d3197b85f0a8f5d65f14144f"],["/tags/MySQL/index.html","c6c6ae26ce964647b94331f5cc8b1563"],["/tags/Sakura-Frp/index.html","e29482216e695c7441211644781d5810"],["/tags/TAS/index.html","793023d9c6b57f6a136af13d56e84984"],["/tags/Typecho/index.html","2fbfc11952b256a70d79b528f1d0309f"],["/tags/Win32DiskImager/index.html","7fdc25dee4029124ee69406e631b19a4"],["/tags/frp/index.html","db4ba018717a71dd6c79188deac678f1"],["/tags/index.html","e5e5df7fecdc94be96ff005f06f976c7"],["/tags/php/index.html","95e2fea77721b8e7e606ec74b045614b"],["/tags/phpMyAdmin/index.html","a3b510f38c34ee15d4dea4b401dad3cd"],["/tags/ubuntu/index.html","b305d2cd32a9bb54cbb0f6216c89305b"],["/tags/内网穿透/index.html","7000da87ac09f7e1c12483167e8c61cb"],["/tags/博客/index.html","b0c60ef6d4eb24502757548e00a1ce48"],["/tags/工具辅助速通/index.html","5740bda4f10b9d1bc215b32917e143c9"],["/tags/我的世界/index.html","19b4ebc5cd426f0535f1faaad7aec5d5"],["/tags/教程/index.html","4f9ba75329e5d68ce69a7f3937dc5533"],["/tags/游戏/index.html","69fab1c2bcd3ed20f23f377dfb2fb012"],["/tags/知识/index.html","a97f90566b4f1f1b191e84ae4208b48a"],["/tags/系统/index.html","9001bae42fad66a523a1ba7dd2e39362"],["/tags/网盘/index.html","3766de2a86f72b56a78dd874384e6a20"],["/tags/超级马里奥/index.html","01cdc7a0d7bb3490f94d255f5440dcba"],["/tags/香橙派/index.html","348828192e84c9610c6bcaa3e53c8a45"],["/timeline/index.html","7de36692fd4e16cbda06fe6febacf5f3"]];
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
