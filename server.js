/******/ (function(modules) { // webpackBootstrap
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest() {
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch (e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/
/******/ 	//eslint-disable-next-line no-unused-vars
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "b248803969a2d12980ee"; // eslint-disable-line no-unused-vars
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) me.children.push(request);
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (typeof dep === "undefined") hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (typeof dep === "undefined") hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle")
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			{
/******/ 				// eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./server/index.js")(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/react-loadable.json":
/*!************************************!*\
  !*** ./public/react-loadable.json ***!
  \************************************/
/*! exports provided: ../public/react-loadable.json, ./accounts, ./api, C:\Users\Masoud\Desktop\react-app\server\index.js, ./Components/ActivePage, ./Components/PrivateRoute, ./Components/PublicRoute, ./Components/footer, ./Components/header, ./matchPropTypes, ./Routes, ./authHeader, ./constances, ../src/actions/userActions, ../src/app, ./containers/AddPost, ./containers/BlogPage, ./containers/HomePage, ./containers/Login, ./containers/SingleWork, ./containers/WorksPage, ./blog.css, ./home.css, ./login.css, ./works.css, ./reducers, ./postReduser, ./userReducer, ../src/store, ../swiper.css, undefined, default */
/***/ (function(module) {

module.exports = {"../public/react-loadable.json":[{"id":"./public/react-loadable.json","name":"./public/react-loadable.json","file":"server.js","publicPath":"/server.js"},{"id":"./public/react-loadable.json","name":"./public/react-loadable.json","file":"server.js.map","publicPath":"/server.js.map"}],"./accounts":[{"id":"./server/accounts.js","name":"./server/accounts.js","file":"server.js","publicPath":"/server.js"},{"id":"./server/accounts.js","name":"./server/accounts.js","file":"server.js.map","publicPath":"/server.js.map"}],"./api":[{"id":"./server/api.js","name":"./server/api.js","file":"server.js","publicPath":"/server.js"},{"id":"./server/api.js","name":"./server/api.js","file":"server.js.map","publicPath":"/server.js.map"}],"C:\\Users\\Masoud\\Desktop\\react-app\\server\\index.js":[{"id":"./server/index.js","name":"./server/index.js","file":"server.js","publicPath":"/server.js"},{"id":"./server/index.js","name":"./server/index.js","file":"server.js.map","publicPath":"/server.js.map"}],"./Components/ActivePage":[{"id":"./src/Components/ActivePage.js","name":"./src/Components/ActivePage.js","file":"server.js","publicPath":"/server.js"},{"id":"./src/Components/ActivePage.js","name":"./src/Components/ActivePage.js","file":"server.js.map","publicPath":"/server.js.map"}],"./Components/PrivateRoute":[{"id":"./src/Components/PrivateRoute.js","name":"./src/Components/PrivateRoute.js","file":"server.js","publicPath":"/server.js"},{"id":"./src/Components/PrivateRoute.js","name":"./src/Components/PrivateRoute.js","file":"server.js.map","publicPath":"/server.js.map"}],"./Components/PublicRoute":[{"id":"./src/Components/PublicRoute.js","name":"./src/Components/PublicRoute.js","file":"server.js","publicPath":"/server.js"},{"id":"./src/Components/PublicRoute.js","name":"./src/Components/PublicRoute.js","file":"server.js.map","publicPath":"/server.js.map"}],"./Components/footer":[{"id":"./src/Components/footer.js","name":"./src/Components/footer.js","file":"server.js","publicPath":"/server.js"},{"id":"./src/Components/footer.js","name":"./src/Components/footer.js","file":"server.js.map","publicPath":"/server.js.map"}],"./Components/header":[{"id":"./src/Components/header.js","name":"./src/Components/header.js","file":"server.js","publicPath":"/server.js"},{"id":"./src/Components/header.js","name":"./src/Components/header.js","file":"server.js.map","publicPath":"/server.js.map"}],"./matchPropTypes":[{"id":"./src/Components/matchPropTypes.js","name":"./src/Components/matchPropTypes.js","file":"server.js","publicPath":"/server.js"},{"id":"./src/Components/matchPropTypes.js","name":"./src/Components/matchPropTypes.js","file":"server.js.map","publicPath":"/server.js.map"}],"./Routes":[{"id":"./src/Routes.js","name":"./src/Routes.js","file":"server.js","publicPath":"/server.js"},{"id":"./src/Routes.js","name":"./src/Routes.js","file":"server.js.map","publicPath":"/server.js.map"}],"./authHeader":[{"id":"./src/actions/authHeader.js","name":"./src/actions/authHeader.js","file":"server.js","publicPath":"/server.js"},{"id":"./src/actions/authHeader.js","name":"./src/actions/authHeader.js","file":"server.js.map","publicPath":"/server.js.map"}],"./constances":[{"id":"./src/actions/constances.js","name":"./src/actions/constances.js","file":"server.js","publicPath":"/server.js"},{"id":"./src/actions/constances.js","name":"./src/actions/constances.js","file":"server.js.map","publicPath":"/server.js.map"}],"../src/actions/userActions":[{"id":"./src/actions/userActions.js","name":"./src/actions/userActions.js","file":"server.js","publicPath":"/server.js"},{"id":"./src/actions/userActions.js","name":"./src/actions/userActions.js","file":"server.js.map","publicPath":"/server.js.map"}],"../src/app":[{"id":"./src/app.js","name":"./src/app.js","file":"server.js","publicPath":"/server.js"},{"id":"./src/app.js","name":"./src/app.js","file":"server.js.map","publicPath":"/server.js.map"}],"./containers/AddPost":[{"id":"./src/containers/AddPost.js","name":"./src/containers/AddPost.js","file":"server.js","publicPath":"/server.js"},{"id":"./src/containers/AddPost.js","name":"./src/containers/AddPost.js","file":"server.js.map","publicPath":"/server.js.map"}],"./containers/BlogPage":[{"id":"./src/containers/BlogPage.js","name":"./src/containers/BlogPage.js","file":"server.js","publicPath":"/server.js"},{"id":"./src/containers/BlogPage.js","name":"./src/containers/BlogPage.js","file":"server.js.map","publicPath":"/server.js.map"}],"./containers/HomePage":[{"id":"./src/containers/HomePage.js","name":"./src/containers/HomePage.js","file":"server.js","publicPath":"/server.js"},{"id":"./src/containers/HomePage.js","name":"./src/containers/HomePage.js","file":"server.js.map","publicPath":"/server.js.map"}],"./containers/Login":[{"id":"./src/containers/Login.js","name":"./src/containers/Login.js","file":"server.js","publicPath":"/server.js"},{"id":"./src/containers/Login.js","name":"./src/containers/Login.js","file":"server.js.map","publicPath":"/server.js.map"}],"./containers/SingleWork":[{"id":"./src/containers/SingleWork.js","name":"./src/containers/SingleWork.js","file":"server.js","publicPath":"/server.js"},{"id":"./src/containers/SingleWork.js","name":"./src/containers/SingleWork.js","file":"server.js.map","publicPath":"/server.js.map"}],"./containers/WorksPage":[{"id":"./src/containers/WorksPage.js","name":"./src/containers/WorksPage.js","file":"server.js","publicPath":"/server.js"},{"id":"./src/containers/WorksPage.js","name":"./src/containers/WorksPage.js","file":"server.js.map","publicPath":"/server.js.map"}],"./blog.css":[{"id":"./src/containers/blog.css","name":"./src/containers/blog.css","file":"server.js","publicPath":"/server.js"},{"id":"./src/containers/blog.css","name":"./src/containers/blog.css","file":"server.js.map","publicPath":"/server.js.map"}],"./home.css":[{"id":"./src/containers/home.css","name":"./src/containers/home.css","file":"server.js","publicPath":"/server.js"},{"id":"./src/containers/home.css","name":"./src/containers/home.css","file":"server.js.map","publicPath":"/server.js.map"}],"./login.css":[{"id":"./src/containers/login.css","name":"./src/containers/login.css","file":"server.js","publicPath":"/server.js"},{"id":"./src/containers/login.css","name":"./src/containers/login.css","file":"server.js.map","publicPath":"/server.js.map"}],"./works.css":[{"id":"./src/containers/works.css","name":"./src/containers/works.css","file":"server.js","publicPath":"/server.js"},{"id":"./src/containers/works.css","name":"./src/containers/works.css","file":"server.js.map","publicPath":"/server.js.map"}],"./reducers":[{"id":"./src/reducers/index.js","name":"./src/reducers/index.js","file":"server.js","publicPath":"/server.js"},{"id":"./src/reducers/index.js","name":"./src/reducers/index.js","file":"server.js.map","publicPath":"/server.js.map"}],"./postReduser":[{"id":"./src/reducers/postReduser.js","name":"./src/reducers/postReduser.js","file":"server.js","publicPath":"/server.js"},{"id":"./src/reducers/postReduser.js","name":"./src/reducers/postReduser.js","file":"server.js.map","publicPath":"/server.js.map"}],"./userReducer":[{"id":"./src/reducers/userReducer.js","name":"./src/reducers/userReducer.js","file":"server.js","publicPath":"/server.js"},{"id":"./src/reducers/userReducer.js","name":"./src/reducers/userReducer.js","file":"server.js.map","publicPath":"/server.js.map"}],"../src/store":[{"id":"./src/store.js","name":"./src/store.js","file":"server.js","publicPath":"/server.js"},{"id":"./src/store.js","name":"./src/store.js","file":"server.js.map","publicPath":"/server.js.map"}],"../swiper.css":[{"id":"./src/swiper.css","name":"./src/swiper.css","file":"server.js","publicPath":"/server.js"},{"id":"./src/swiper.css","name":"./src/swiper.css","file":"server.js.map","publicPath":"/server.js.map"}],"undefined":[{"id":"axios","name":"axios","file":"server.js","publicPath":"/server.js"},{"id":"babel-polyfill","name":"babel-polyfill","file":"server.js","publicPath":"/server.js"},{"id":"body-parser","name":"body-parser","file":"server.js","publicPath":"/server.js"},{"id":"bourne","name":"bourne","file":"server.js","publicPath":"/server.js"},{"id":"cors","name":"cors","file":"server.js","publicPath":"/server.js"},{"id":"crypto","name":"crypto","file":"server.js","publicPath":"/server.js"},{"id":"express","name":"express","file":"server.js","publicPath":"/server.js"},{"id":"express-jwt","name":"express-jwt","file":"server.js","publicPath":"/server.js"},{"id":"express-session","name":"express-session","file":"server.js","publicPath":"/server.js"},{"id":"jsonwebtoken","name":"jsonwebtoken","file":"server.js","publicPath":"/server.js"},{"id":"prop-types","name":"prop-types","file":"server.js","publicPath":"/server.js"},{"id":"react","name":"react","file":"server.js","publicPath":"/server.js"},{"id":"react-dom/server","name":"react-dom/server","file":"server.js","publicPath":"/server.js"},{"id":"react-id-swiper","name":"react-id-swiper","file":"server.js","publicPath":"/server.js"},{"id":"react-loadable","name":"react-loadable","file":"server.js","publicPath":"/server.js"},{"id":"react-loadable/webpack","name":"react-loadable/webpack","file":"server.js","publicPath":"/server.js"},{"id":"react-redux","name":"react-redux","file":"server.js","publicPath":"/server.js"},{"id":"react-router-dom","name":"react-router-dom","file":"server.js","publicPath":"/server.js"},{"id":"redux","name":"redux","file":"server.js","publicPath":"/server.js"},{"id":"redux-logger","name":"redux-logger","file":"server.js","publicPath":"/server.js"},{"id":"redux-thunk","name":"redux-thunk","file":"server.js","publicPath":"/server.js"},{"id":"axios","name":"axios","file":"server.js.map","publicPath":"/server.js.map"},{"id":"babel-polyfill","name":"babel-polyfill","file":"server.js.map","publicPath":"/server.js.map"},{"id":"body-parser","name":"body-parser","file":"server.js.map","publicPath":"/server.js.map"},{"id":"bourne","name":"bourne","file":"server.js.map","publicPath":"/server.js.map"},{"id":"cors","name":"cors","file":"server.js.map","publicPath":"/server.js.map"},{"id":"crypto","name":"crypto","file":"server.js.map","publicPath":"/server.js.map"},{"id":"express","name":"express","file":"server.js.map","publicPath":"/server.js.map"},{"id":"express-jwt","name":"express-jwt","file":"server.js.map","publicPath":"/server.js.map"},{"id":"express-session","name":"express-session","file":"server.js.map","publicPath":"/server.js.map"},{"id":"jsonwebtoken","name":"jsonwebtoken","file":"server.js.map","publicPath":"/server.js.map"},{"id":"prop-types","name":"prop-types","file":"server.js.map","publicPath":"/server.js.map"},{"id":"react","name":"react","file":"server.js.map","publicPath":"/server.js.map"},{"id":"react-dom/server","name":"react-dom/server","file":"server.js.map","publicPath":"/server.js.map"},{"id":"react-id-swiper","name":"react-id-swiper","file":"server.js.map","publicPath":"/server.js.map"},{"id":"react-loadable","name":"react-loadable","file":"server.js.map","publicPath":"/server.js.map"},{"id":"react-loadable/webpack","name":"react-loadable/webpack","file":"server.js.map","publicPath":"/server.js.map"},{"id":"react-redux","name":"react-redux","file":"server.js.map","publicPath":"/server.js.map"},{"id":"react-router-dom","name":"react-router-dom","file":"server.js.map","publicPath":"/server.js.map"},{"id":"redux","name":"redux","file":"server.js.map","publicPath":"/server.js.map"},{"id":"redux-logger","name":"redux-logger","file":"server.js.map","publicPath":"/server.js.map"},{"id":"redux-thunk","name":"redux-thunk","file":"server.js.map","publicPath":"/server.js.map"}]};

/***/ }),

/***/ "./server/accounts.js":
/*!****************************!*\
  !*** ./server/accounts.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressSession = __webpack_require__(/*! express-session */ "express-session");

var _expressSession2 = _interopRequireDefault(_expressSession);

var _cors = __webpack_require__(/*! cors */ "cors");

var _cors2 = _interopRequireDefault(_cors);

var _expressJwt = __webpack_require__(/*! express-jwt */ "express-jwt");

var _expressJwt2 = _interopRequireDefault(_expressJwt);

var _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _bourne = __webpack_require__(/*! bourne */ "bourne");

var _bourne2 = _interopRequireDefault(_bourne);

var _crypto = __webpack_require__(/*! crypto */ "crypto");

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var db = new _bourne2.default('users.json');

function hash(password) {
	return _crypto2.default.createHash('sha256').update(password).digest('hex');
}
var corsOption = {
	origin: true,
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	credentials: true,
	exposedHeaders: ['x-auth-token']
};
var createToken = function createToken(auth) {
	console.log(auth);
	return _jsonwebtoken2.default.sign({
		id: auth.id
	}, 'my-secret', {
		expiresIn: 2 * 60
	});
};

var generateToken = function generateToken(req, res, next) {
	console.log("generatetoken");
	req.token = createToken(req.auth);
	return next();
};

var sendToken = function sendToken(req, res, next) {
	console.log("sendtoken");
	res.setHeader('x-auth-token', req.token);
	return res.status(200).send(JSON.stringify(req.user));
};
//token handling middleware
var authenticate = (0, _expressJwt2.default)({
	secret: 'my-secret',
	requestProperty: 'auth',
	getToken: function getToken(req) {
		if (req.headers['x-auth-token']) {
			return req.headers['x-auth-token'];
		}
		return null;
	}
});

var getOne = function getOne(req, res) {
	var user = req.user.toObject();

	res.json(user);
};

router.use(_bodyParser2.default.urlencoded()).use(_bodyParser2.default.json()).use((0, _cors2.default)(corsOption)).use((0, _expressSession2.default)({ secret: 'asfdgdgy657gkutyutkyu6v6iesldkvfjso8ers' })).post('/login', function (req, res, next) {
	console.log(req.body.password);
	var user = {
		username: req.body.username,
		password: hash(req.body.password)
	};

	db.findOne(user, function (err, data) {
		if (data) {
			// req.session.userId = data.id;
			req.user = data;
			req.auth = {
				id: data.id
			};
			return next();
		} else {
			res.redirect('/login');
		}
	});
}, generateToken, sendToken).post('/register', function (req, res) {
	var user = {
		username: req.body.username,
		password: hash(req.body.password),
		options: {}
	};
	db.find({ username: user.username }, function (err, data) {
		if (!data.length) {
			db.insert(user, function (err, data) {
				req.session.userId = data.id;
				res.redirect('/');
			});
		} else {
			res.redirect('/login');
		}
	});
}).get('/logout', function (req, res) {
	req.session.userId = null;
	req.user = null;
	res.redirect('/');
})
// .get('/login', function(req, res) {
// 	if (!req.user) {

// 		console.log("user doesnt exist(login)");
// 		res.sendfile('./public/index.html');

//   	} else {
// 		console.log("user exist login");
// 		// res.send({sess: req.user});

// 		res.redirect('/');
//   	}
// })
.get('/authen', authenticate, function (req, res, next) {
	db.findOne({ id: req.auth.id }, function (err, data) {
		if (!err) {
			req.user = data;
			req.auth = {
				id: data.id
			};
			console.log("auth");
			next();
		} else {
			next(err);
		}
	});
}, getOne).use(function (req, res, next) {
	if (req.auth) {
		db.findOne({ id: req.auth.id }, function (err, data) {
			req.user = data;

			// res.send({sess: req.session});
			console.log("run");
		});
	}
	next();
});

exports.default = router;

/***/ }),

/***/ "./server/api.js":
/*!***********************!*\
  !*** ./server/api.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _bourne = __webpack_require__(/*! bourne */ "bourne");

var _bourne2 = _interopRequireDefault(_bourne);

var _bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = new _bourne2.default('data.json');
var router = _express2.default.Router();

router.use(_bodyParser2.default.json()).route('/post').get(function (req, res) {
	console.log(req.user.id);
	db.find({ userId: parseInt(req.user.id, 10) }, function (err, data) {
		res.json(data);
	});
}).post(function (req, res) {
	var post = req.body;
	// console.log(post);
	post.userId = req.user.id;

	db.insert(post, function (err, data) {
		res.json(data);
	});
});
router.param('id', function (req, res, next) {
	req.dbQuery = { id: parseInt(req.params.id, 10) };
	next();
}).route('/post/:id').get(function (req, res) {
	db.findOne(req.dbQuery, function (err, data) {
		res.json(data);
	});
}).put(function (req, res) {
	var post = req.body;
	delete post.$promise;
	delete post.$resolved;
	db.update(req.dbQuery, post, function (err, data) {
		res.json(data[0]);
	});
}).delete(function (req, res) {
	db.delete(req.dbQuery, function () {
		res.json(null);
	});
});

exports.default = router;

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! babel-polyfill */ "babel-polyfill");

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _api = __webpack_require__(/*! ./api */ "./server/api.js");

var _api2 = _interopRequireDefault(_api);

var _accounts = __webpack_require__(/*! ./accounts */ "./server/accounts.js");

var _accounts2 = _interopRequireDefault(_accounts);

var _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactLoadable = __webpack_require__(/*! react-loadable */ "react-loadable");

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _webpack = __webpack_require__(/*! react-loadable/webpack */ "react-loadable/webpack");

var _reactLoadable3 = __webpack_require__(/*! ../public/react-loadable.json */ "./public/react-loadable.json");

var _reactLoadable4 = _interopRequireDefault(_reactLoadable3);

var _store = __webpack_require__(/*! ../src/store */ "./src/store.js");

var _app = __webpack_require__(/*! ../src/app */ "./src/app.js");

var _userActions = __webpack_require__(/*! ../src/actions/userActions */ "./src/actions/userActions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public')).use(_accounts2.default).use('/api', _api2.default).get('*', function (req, res) {

	var user = req.user ? req.user : {};
	var store = (0, _store.configureStore)();
	if (req.token) {
		var token = req.token;
		_jsonwebtoken2.default.verify(token, 'my-secret', function (err, decoded) {
			if (decoded) {
				store.dispatch((0, _userActions.loginSuccess)(user));
				res.setHeader('x-auth-token', req.token);
			} else {
				if (err.name === "TokenExpiredError") {
					store.dispatch((0, _userActions.logout)());
					req.token = null;
					console.log("TokenExpiredError");
				}
			}
		});
	}

	var context = req.user ? req.user : {};
	var modules = [];
	var html = (0, _server.renderToString)(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(
			_reactRouterDom.StaticRouter,
			{ location: req.url, context: context },
			_react2.default.createElement(
				_reactLoadable2.default.Capture,
				{ report: function report(moduleName) {
						return modules.push(moduleName);
					} },
				_react2.default.createElement(_app.App, null)
			)
		)
	));
	var finalState = store.getState();
	console.log(modules);
	var bundles = (0, _webpack.getBundles)(_reactLoadable4.default, modules);
	console.log(bundles);
	var styles = bundles.filter(function (bundle) {
		return bundle.file.endsWith('.css');
	});
	var scripts = bundles.filter(function (bundle) {
		return bundle.file.endsWith('.js');
	});

	var renderFullPage = function renderFullPage(html, preloadedState) {
		return '\n\t\t\t\t<!DOCTYPE html>\n\t\t\t\t<html lang="en">\n\t\t\t\t<head>\n\t\t\t\t\t<meta charset="UTF-8">\n\t\t\t\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t\t\t\t\t<meta http-equiv="X-UA-Compatible" content="ie=edge">\n\t\t\t\t\t<title>Universal App</title>\n\t\t\t\t\t' + styles.map(function (style) {
			return '<link href="/dist/' + style.file + '" rel="stylesheet"/>';
		}).join('\n') + '\n\t\t\t\t</head>\n\t\t\t\t<body>\n\t\t\t\t\t<div id="root">' + html + '</div>\n\t\t\t\t\t<script>\n          \t\t\t\twindow.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\x3c') + '\n\t\t\t\t\t   </script>\n\t\t\t\t\t   ' + scripts.map(function (script) {
			return '<script src="/dist/' + script.file + '"></script>';
		}).join('\n') + '\n\t\t\t\t\t<script src="/bundle.js" defer></script>\n\t\t\t\t</body>\n\t\t\t\t</html>\n\t\t\t';
	};

	res.send(renderFullPage(html, finalState));
});
_reactLoadable2.default.preloadAll().then(function () {
	app.listen(3000);
});

/***/ }),

/***/ "./src/Components/ActivePage.js":
/*!**************************************!*\
  !*** ./src/Components/ActivePage.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ActivePage = function (_Component) {
    _inherits(ActivePage, _Component);

    function ActivePage() {
        _classCallCheck(this, ActivePage);

        return _possibleConstructorReturn(this, (ActivePage.__proto__ || Object.getPrototypeOf(ActivePage)).apply(this, arguments));
    }

    _createClass(ActivePage, [{
        key: "render",
        value: function render() {
            var pathName = this.props.location.pathname;
            var activeClass = pathName.substring(1);
            // console.log(this.props.location);
            return _react2.default.createElement(
                "div",
                { className: "app-wrapper " + activeClass },
                this.props.children
            );
        }
    }]);

    return ActivePage;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(ActivePage);

/***/ }),

/***/ "./src/Components/PrivateRoute.js":
/*!****************************************!*\
  !*** ./src/Components/PrivateRoute.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _matchPropTypes = __webpack_require__(/*! ./matchPropTypes */ "./src/Components/matchPropTypes.js");

var _matchPropTypes2 = _interopRequireDefault(_matchPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PrivateRoute = function PrivateRoute(_ref) {
    var Component = _ref.component,
        user = _ref.user,
        rest = _objectWithoutProperties(_ref, ["component", "user"]);

    return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
        render: function render(props) {
            return user ? _react2.default.createElement(Component, _extends({ user: user }, props)) : _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: "/login" } });
        }
    }));
};

// PrivateRoute.propTypes = matchPropTypes;

exports.default = PrivateRoute;

/***/ }),

/***/ "./src/Components/PublicRoute.js":
/*!***************************************!*\
  !*** ./src/Components/PublicRoute.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _matchPropTypes = __webpack_require__(/*! ./matchPropTypes */ "./src/Components/matchPropTypes.js");

var _matchPropTypes2 = _interopRequireDefault(_matchPropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PrivateRoute = function PrivateRoute(_ref) {
    var Component = _ref.component,
        user = _ref.user,
        rest = _objectWithoutProperties(_ref, ["component", "user"]);

    return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
        render: function render(props) {
            return user ? _react2.default.createElement(_reactRouterDom.Redirect, { to: { pathname: "/" } }) : _react2.default.createElement(Component, _extends({ user: user }, props));
        }
    }));
};

// PrivateRoute.propTypes = matchPropTypes;

exports.default = PrivateRoute;

/***/ }),

/***/ "./src/Components/footer.js":
/*!**********************************!*\
  !*** ./src/Components/footer.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "footer",
                { className: "ftr", id: "footer" },
                _react2.default.createElement(
                    "div",
                    { className: "container" },
                    _react2.default.createElement(
                        "div",
                        { className: "row" },
                        _react2.default.createElement(
                            "div",
                            { className: "col-sm-6 col-md-4 from-twitter" },
                            _react2.default.createElement(
                                "h3",
                                null,
                                "From The Blog"
                            ),
                            _react2.default.createElement("div", { className: "show-tweet" })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "col-sm-6 col-md-4 testimonials" },
                            _react2.default.createElement(
                                "h3",
                                null,
                                "Testimonials"
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                " ghjghjghjgj. "
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "test-author" },
                                _react2.default.createElement("img", { src: "", alt: "" }),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    _react2.default.createElement(
                                        "span",
                                        null,
                                        "Masoud"
                                    ),
                                    " Inc."
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "col-sm-6 col-md-4 contact-us" },
                            _react2.default.createElement(
                                "h3",
                                null,
                                "Contact Us"
                            ),
                            _react2.default.createElement(
                                "form",
                                { action: "", method: "post" },
                                _react2.default.createElement("input", { type: "text", name: "name", className: "name", placeholder: "Name" }),
                                _react2.default.createElement("input", { type: "text", name: "email", className: "email", placeholder: "Email" }),
                                _react2.default.createElement("textarea", { name: "message", placeholder: "Message" }),
                                _react2.default.createElement(
                                    "button",
                                    { type: "submit" },
                                    "Submit"
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "row" },
                        _react2.default.createElement(
                            "div",
                            { className: "col-lg-12" },
                            _react2.default.createElement(
                                "div",
                                { className: "social-links" },
                                _react2.default.createElement(
                                    "a",
                                    { className: "facebook", href: "#" },
                                    _react2.default.createElement(
                                        "article",
                                        null,
                                        _react2.default.createElement("span", { className: "icon-facebook" })
                                    )
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "twitter", href: "#" },
                                    _react2.default.createElement(
                                        "article",
                                        null,
                                        _react2.default.createElement("span", { className: "icon-twitter" })
                                    )
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "tumblr", href: "#" },
                                    _react2.default.createElement(
                                        "article",
                                        null,
                                        _react2.default.createElement("span", { className: "icon-tumblr" })
                                    )
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "pinterest", href: "#" },
                                    _react2.default.createElement(
                                        "article",
                                        null,
                                        _react2.default.createElement("span", { className: "icon-pinterest" })
                                    )
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "dribbble", href: "#" },
                                    _react2.default.createElement(
                                        "article",
                                        null,
                                        _react2.default.createElement("span", { className: "icon-dribbble" })
                                    )
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "googleplus", href: "#" },
                                    _react2.default.createElement(
                                        "article",
                                        null,
                                        _react2.default.createElement("span", { className: "icon-googleplus" })
                                    )
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "skype", href: "#" },
                                    _react2.default.createElement(
                                        "article",
                                        null,
                                        _react2.default.createElement("span", { className: "icon-skype" })
                                    )
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "youtube", href: "#" },
                                    _react2.default.createElement(
                                        "article",
                                        null,
                                        _react2.default.createElement("span", { className: "icon-youtube" })
                                    )
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "git", href: "#" },
                                    _react2.default.createElement(
                                        "article",
                                        null,
                                        _react2.default.createElement("span", { className: "icon-github" })
                                    )
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "linkedin", href: "#" },
                                    _react2.default.createElement(
                                        "article",
                                        null,
                                        _react2.default.createElement("span", { className: "icon-linkedin" })
                                    )
                                ),
                                _react2.default.createElement(
                                    "a",
                                    { className: "email", href: "#" },
                                    _react2.default.createElement(
                                        "article",
                                        null,
                                        _react2.default.createElement("span", { className: "icon-mail2" })
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "row" },
                        _react2.default.createElement(
                            "div",
                            { className: "col-sm-12 copyright" },
                            _react2.default.createElement(
                                "p",
                                null,
                                "Copyright \xA9 2018 -   by ",
                                _react2.default.createElement(
                                    "a",
                                    { href: "#", target: "_blank" },
                                    "Masoud Eyvatvandy"
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement("div", { className: "bi", id: "tag" })
            );
        }
    }]);

    return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),

/***/ "./src/Components/header.js":
/*!**********************************!*\
  !*** ./src/Components/header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Header = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _userActions = __webpack_require__(/*! ../actions/userActions */ "./src/actions/userActions.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, Button } from "mdbreact";


var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

        _this.state = {
            collapsed: true,
            exposed: false,
            dropdownOpen: false
        };

        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }

    _createClass(Header, [{
        key: "toggle",
        value: function toggle() {
            this.setState({
                dropdownOpen: !this.state.dropdownOpen
            });
        }
    }, {
        key: "toggleCollapse",
        value: function toggleCollapse() {
            var collapsed = !this.state.collapsed;
            this.setState({ collapsed: collapsed, exposed: true });
        }
    }, {
        key: "navExpose",
        value: function navExpose() {
            var exposed = !this.state.exposed;
            this.setState({ exposed: exposed });
        }
    }, {
        key: "logout",
        value: function logout() {
            // this.props.changeUserState(null);
            var dispatch = this.props.dispatch;

            console.log(this.props);
            dispatch((0, _userActions.logout)());
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                collapsed = _state.collapsed,
                exposed = _state.exposed;

            var navClass = collapsed ? "show" : '';
            var toggleBtnClass = collapsed ? '' : 'collapsed';
            var navBtnClass = exposed || !collapsed ? 'nav-exposed' : '';
            var user = this.props.user;

            return _react2.default.createElement(
                "header",
                null,
                _react2.default.createElement(
                    "nav",
                    { className: "navbar dark navbar-expand-md scrolling navbar-dark ", fixed: "top" },
                    _react2.default.createElement(
                        "a",
                        { className: "navbar-brand", href: "/" },
                        _react2.default.createElement("img", { src: "", alt: "", height: "20" }),
                        "  ReactCMS"
                    ),
                    _react2.default.createElement(
                        "button",
                        { className: "navbar-toggler " + toggleBtnClass, onClick: this.toggleCollapse.bind(this), "data-toggle": "collapse", "data-target": "#reactNavbar" },
                        _react2.default.createElement("span", { className: "navbar-toggler-icon" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "collapse navbar-collapse navbar-right " + navClass + "  " + navBtnClass, id: "reactNavbar" },
                        _react2.default.createElement(
                            "ul",
                            { className: "navbar-nav mr-3 right" },
                            _react2.default.createElement(
                                _reactRouterDom.NavLink,
                                { exact: true, activeClassName: "active", className: "nav-link", to: "/" },
                                "Home"
                            ),
                            _react2.default.createElement(
                                _reactRouterDom.NavLink,
                                { activeClassName: "active", className: "nav-link", to: "/works" },
                                "Works"
                            ),
                            _react2.default.createElement(
                                _reactRouterDom.NavLink,
                                {
                                    activeClassName: "active"
                                    // isActive={this.setActivePage.bind(this)} 
                                    , className: "nav-link",
                                    to: "/blog" },
                                "Blog"
                            ),
                            _react2.default.createElement(
                                _reactRouterDom.NavLink,
                                { activeClassName: "active", className: "nav-link", to: "/about" },
                                "About"
                            ),
                            !user && _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: "/login" },
                                "LogIn"
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "nav-button ", onClick: this.navExpose.bind(this) },
                            _react2.default.createElement(
                                "div",
                                { className: "hamburger" },
                                _react2.default.createElement("div", { className: "line" }),
                                _react2.default.createElement("div", { className: "line" }),
                                _react2.default.createElement("div", { className: "line" })
                            ),
                            _react2.default.createElement("div", { id: "menu-click-area" })
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    var user = state.user.user;

    return {
        user: user
    };
};

var connectedLoginPage = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(Header));
exports.Header = connectedLoginPage;

/***/ }),

/***/ "./src/Components/matchPropTypes.js":
/*!******************************************!*\
  !*** ./src/Components/matchPropTypes.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    component: _propTypes2.default.func.isRequired,
    user: function user(props, propName, componentName) {
        var propValue = props[propName];

        if (propValue !== null) {
            return new Error('prop on component has invalid value');
        }
    }
};

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Routes = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactLoadable = __webpack_require__(/*! react-loadable */ "react-loadable");

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _userActions = __webpack_require__(/*! ./actions/userActions */ "./src/actions/userActions.js");

var _PrivateRoute = __webpack_require__(/*! ./Components/PrivateRoute */ "./src/Components/PrivateRoute.js");

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

var _PublicRoute = __webpack_require__(/*! ./Components/PublicRoute */ "./src/Components/PublicRoute.js");

var _PublicRoute2 = _interopRequireDefault(_PublicRoute);

var _BlogPage = __webpack_require__(/*! ./containers/BlogPage */ "./src/containers/BlogPage.js");

var _BlogPage2 = _interopRequireDefault(_BlogPage);

var _SingleWork = __webpack_require__(/*! ./containers/SingleWork */ "./src/containers/SingleWork.js");

var _SingleWork2 = _interopRequireDefault(_SingleWork);

var _AddPost = __webpack_require__(/*! ./containers/AddPost */ "./src/containers/AddPost.js");

var _AddPost2 = _interopRequireDefault(_AddPost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// import Home from "./containers/HomePage";
// import Works from "./containers/WorksPage";

// import Login from "./containers/Login";


var Loading = function Loading() {
    return _react2.default.createElement(
        "section",
        { id: "loader-wrapper" },
        _react2.default.createElement("div", { id: "loader" }),
        _react2.default.createElement("div", { className: "loader-section section-left" }),
        _react2.default.createElement("div", { className: "loader-section section-right" })
    );
};

var Home = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.resolve().then(function () {
            return _interopRequireWildcard(__webpack_require__(/*! ./containers/HomePage */ "./src/containers/HomePage.js"));
        });
    },
    loading: Loading,
    modules: ["./containers/HomePage"],
    webpack: function webpack() {
        return [/*require.resolve*/(/*! ./containers/HomePage */ "./src/containers/HomePage.js")];
    },
    delay: 90000
});

var Works = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.resolve().then(function () {
            return _interopRequireWildcard(__webpack_require__(/*! ./containers/WorksPage */ "./src/containers/WorksPage.js"));
        });
    },
    modules: ["./containers/WorksPage"],
    webpack: function webpack() {
        return [/*require.resolve*/(/*! ./containers/WorksPage */ "./src/containers/WorksPage.js")];
    },
    loading: Loading,
    delay: 90000
});

var Login = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.resolve().then(function () {
            return _interopRequireWildcard(__webpack_require__(/*! ./containers/Login */ "./src/containers/Login.js"));
        });
    },
    modules: ["./containers/Login"],
    webpack: function webpack() {
        return [/*require.resolve*/(/*! ./containers/Login */ "./src/containers/Login.js")];
    },
    loading: Loading,
    delay: 90000
});

var Routes = function (_Component) {
    _inherits(Routes, _Component);

    function Routes() {
        _classCallCheck(this, Routes);

        return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
    }

    _createClass(Routes, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            // const headers = JSON.parse(localStorage.getItem('headers'));
            // if (headers) {
            //     console.log(headers['x-auth-token'])
            // }

            // if (!headers && !headers['x-auth-token']) {
            //     this.props.dispatch(logout())
            // }
            var user = this.props.user;
            // console.log(user);
            return _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_PublicRoute2.default, {
                    path: "/login",
                    component: Login,
                    user: user
                }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: Home }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/works", component: Works }),
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/blog", component: _BlogPage2.default }),
                _react2.default.createElement(_PrivateRoute2.default, {
                    path: "/addpost",
                    component: _AddPost2.default,
                    user: user
                }),
                _react2.default.createElement(_reactRouterDom.Route, { path: "/works/:workid", component: _SingleWork2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: "/about", component: Works }),
                _react2.default.createElement(_reactRouterDom.Route, { render: function render() {
                        return _react2.default.createElement(
                            "h1",
                            null,
                            "Not Found!"
                        );
                    } })
            );
        }
    }]);

    return Routes;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    var user = state.user.user;

    return {
        user: user
    };
};

var connectedLoginPage = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(Routes));
exports.Routes = connectedLoginPage;

/***/ }),

/***/ "./src/actions/authHeader.js":
/*!***********************************!*\
  !*** ./src/actions/authHeader.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
     value: true
});
var authHeader = exports.authHeader = function authHeader() {
     // return authorization header with jwt token
     var headers = JSON.parse(localStorage.getItem('headers'));

     if (headers['x-auth-token']) {
          return JSON.stringify(headers);
     } else {
          return {};
     }
};

/***/ }),

/***/ "./src/actions/constances.js":
/*!***********************************!*\
  !*** ./src/actions/constances.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var userConstants = exports.userConstants = {
    LOGIN_REQUEST: 'USER_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'USER_LOGIN_FAILURE',

    LOGOUT: 'USERS_LOGOUT',

    REGISTER_REQUEST: 'USER_REGISTER_REQUEST',
    REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
    REGISTER_FAILURE: 'USER_REGISTER_FAILURE',

    SET_USER_OPTIONS: 'SET_USER_OPTIONS'
};

var postConstants = exports.postConstants = {
    POSTS_REQUEST: 'FETCH_POSTS_REQUEST',
    POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
    POSTS_FAILURE: 'FETCH_POSTS_FAILURE',

    LOGOUT: 'USERS_LOGOUT',

    REGISTER_REQUEST: 'USER_REGISTER_REQUEST',
    REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
    REGISTER_FAILURE: 'USER_REGISTER_FAILURE'
};

/***/ }),

/***/ "./src/actions/userActions.js":
/*!************************************!*\
  !*** ./src/actions/userActions.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logout = exports.login = exports.loginSuccess = undefined;

var _constances = __webpack_require__(/*! ./constances */ "./src/actions/constances.js");

var _authHeader = __webpack_require__(/*! ./authHeader */ "./src/actions/authHeader.js");

var _axios = __webpack_require__(/*! axios */ "axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const history = createBrowserHistory();
var loginRequest = function loginRequest(user) {
    return {
        type: _constances.userConstants.LOGIN_REQUEST,
        payload: user
    };
};
// import { createBrowserHistory } from "history";
var loginSuccess = exports.loginSuccess = function loginSuccess(user) {
    return {
        type: _constances.userConstants.LOGIN_SUCCESS,
        payload: user
    };
};
var loginFailure = function loginFailure(err) {
    return {
        type: _constances.userConstants.LOGIN_FAILURE,
        payload: err
    };
};

var registerRequest = function registerRequest(user) {
    return {
        type: _constances.userConstants.REGISTER_REQUEST,
        payload: user
    };
};
var registerFailure = function registerFailure(err) {
    return {
        type: _constances.userConstants.REGISTER_FAILURE,
        payload: err
    };
};
var registerSuccess = function registerSuccess(user) {
    return {
        type: _constances.userConstants.REGISTER_SUCCESS,
        payload: user
    };
};

var setUserOptions = function setUserOptions(options) {
    return {
        type: _constances.userConstants.SET_USER_OPTIONS,
        payload: options
    };
};

var login = exports.login = function login(username, password) {
    return function (dispatch) {
        var reqOptions = {
            headers: { 'Content-Type': 'application/json' },
            data: {
                username: username,
                password: password
            }
        };

        dispatch(loginRequest({ username: username }));
        _axios2.default.post("/login", { username: username, password: password }).then(function (response) {
            console.log(response);
            localStorage.setItem('headers', JSON.stringify(response.headers));
            localStorage.setItem('user', JSON.stringify(response.data));
            dispatch(loginSuccess(response.data));
            // history.push('/');
        }).catch(function (err) {
            dispatch(loginFailure(err));
        });
    };
};

var logout = exports.logout = function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('headers');
    return { type: _constances.userConstants.LOGOUT };
};

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _header = __webpack_require__(/*! ./Components/header */ "./src/Components/header.js");

var _footer = __webpack_require__(/*! ./Components/footer */ "./src/Components/footer.js");

var _footer2 = _interopRequireDefault(_footer);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _ActivePage = __webpack_require__(/*! ./Components/ActivePage */ "./src/Components/ActivePage.js");

var _ActivePage2 = _interopRequireDefault(_ActivePage);

var _Routes = __webpack_require__(/*! ./Routes */ "./src/Routes.js");

var _userActions = __webpack_require__(/*! ./actions/userActions */ "./src/actions/userActions.js");

var _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PathName = (0, _reactRouterDom.withRouter)(function (_ref) {
  var location = _ref.location,
      match = _ref.match;

  return location.pathname.substring(1);
});

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      title: "react",
      activePage: PathName,
      user: null
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var headers = JSON.parse(localStorage.getItem("headers"));
      var dispatch = this.props.dispatch;

      if (headers && headers["x-auth-token"]) {
        var token = headers["x-auth-token"];
        console.log("headers exist", token);
        _jsonwebtoken2.default.verify(token, "my-secret", function (err, decoded) {
          if (decoded) {
            var user = JSON.parse(localStorage.getItem("user"));
            dispatch((0, _userActions.loginSuccess)(user));
            console.log(decoded);
          } else {
            console.log("not decoded", err);
            if (err.name === "TokenExpiredError") {
              dispatch((0, _userActions.logout)());
              console.log("TokenExpiredError");
            }
          }
        });
      }
      console.log("did mount dd");
    }
  }, {
    key: "handleUserChange",
    value: function handleUserChange(user) {
      this.setState({ user: user });
      console.log(this.state.user);
    }
  }, {
    key: "handlePageChange",
    value: function handlePageChange(page) {
      this.setState({ activePage: page });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _ActivePage2.default,
        null,
        _react2.default.createElement(_header.Header, {
          changeUserState: this.handleUserChange.bind(this)
          // getActivePage={this.handlePageChange.bind(this)}
          // user= {this.state.user}
          , title: this.state.title
        }),
        _react2.default.createElement(
          "main",
          null,
          _react2.default.createElement(_Routes.Routes
          // user= {this.state.user}
          , { changeUserState: this.handleUserChange.bind(this)
          })
        ),
        _react2.default.createElement(_footer2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  var user = state.user.user;

  return {
    user: user
  };
};
var connectedApp = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(App));

exports.App = connectedApp;

/***/ }),

/***/ "./src/containers/AddPost.js":
/*!***********************************!*\
  !*** ./src/containers/AddPost.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddPost = function (_Component) {
    _inherits(AddPost, _Component);

    function AddPost() {
        _classCallCheck(this, AddPost);

        return _possibleConstructorReturn(this, (AddPost.__proto__ || Object.getPrototypeOf(AddPost)).apply(this, arguments));
    }

    _createClass(AddPost, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                null,
                "this is addpost page"
            );
        }
    }]);

    return AddPost;
}(_react.Component);

exports.default = AddPost;

/***/ }),

/***/ "./src/containers/BlogPage.js":
/*!************************************!*\
  !*** ./src/containers/BlogPage.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./blog.css */ "./src/containers/blog.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlogPage = function (_Component) {
    _inherits(BlogPage, _Component);

    function BlogPage() {
        _classCallCheck(this, BlogPage);

        return _possibleConstructorReturn(this, (BlogPage.__proto__ || Object.getPrototypeOf(BlogPage)).apply(this, arguments));
    }

    _createClass(BlogPage, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                null,
                "this is ",
                this.props.match.path,
                " page",
                _react2.default.createElement(
                    "div",
                    null,
                    "this is a test for posts page"
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    "this is a test for posts page"
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    "this is a test for posts page"
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    "this is a test for posts page"
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    "this is a test for posts page"
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    "this is a test for posts page"
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    "this is a test for posts page"
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    "this is a test for posts page"
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    "this is a test for posts page"
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    "this is a test for posts page"
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    "this is a test for posts page"
                )
            );
        }
    }]);

    return BlogPage;
}(_react.Component);

exports.default = BlogPage;

/***/ }),

/***/ "./src/containers/HomePage.js":
/*!************************************!*\
  !*** ./src/containers/HomePage.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactIdSwiper = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");

var _reactIdSwiper2 = _interopRequireDefault(_reactIdSwiper);

__webpack_require__(/*! ../swiper.css */ "./src/swiper.css");

__webpack_require__(/*! ./home.css */ "./src/containers/home.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
    _inherits(HomePage, _Component);

    function HomePage() {
        _classCallCheck(this, HomePage);

        return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
    }

    _createClass(HomePage, [{
        key: "render",
        value: function render() {
            var params = {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                spaceBetween: 10,
                loop: true
                // autoplay: {
                //     delay: 3000,
                //     disableOnInteraction: false
                // },
                // effect: 'coverflow',
            };

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "section",
                    { className: "slider-block" },
                    _react2.default.createElement(
                        "div",
                        { className: "slider" },
                        _react2.default.createElement(
                            _reactIdSwiper2.default,
                            params,
                            _react2.default.createElement("div", { className: "Slide1" }),
                            _react2.default.createElement("div", { className: "Slide2" }),
                            _react2.default.createElement("div", { className: "Slide3" }),
                            _react2.default.createElement("div", { className: "Slide4" }),
                            _react2.default.createElement("div", { className: "Slide5" })
                        )
                    )
                )
            );
        }
    }]);

    return HomePage;
}(_react.Component);

exports.default = HomePage;

/***/ }),

/***/ "./src/containers/Login.js":
/*!*********************************!*\
  !*** ./src/containers/Login.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _userActions = __webpack_require__(/*! ../actions/userActions */ "./src/actions/userActions.js");

__webpack_require__(/*! ./login.css */ "./src/containers/login.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    // reset login status
    // this.props.dispatch(logout());

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      username: "",
      password: "",
      submitted: false
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: "handleChange",
    value: function handleChange(e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();

      this.setState({ submitted: true });
      var _state = this.state,
          username = _state.username,
          password = _state.password;
      var dispatch = this.props.dispatch;

      if (username && password) {
        dispatch((0, _userActions.login)(username, password));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var loggingIn = this.props.loggingIn;
      var _state2 = this.state,
          username = _state2.username,
          password = _state2.password,
          submitted = _state2.submitted;


      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "login-wrapper" },
          _react2.default.createElement("div", { className: "logo ir" }),
          _react2.default.createElement(
            "span",
            { className: "title" },
            "Login"
          ),
          _react2.default.createElement(
            "form",
            { name: "form", onSubmit: this.handleSubmit },
            _react2.default.createElement(
              "fieldset",
              null,
              _react2.default.createElement(
                "div",
                { className: "inputrow" },
                _react2.default.createElement("i", { className: "fa icon-user fa-fw" }),
                _react2.default.createElement("input", {
                  type: "text",
                  name: "username",
                  id: "user",
                  placeholder: "Username",
                  onChange: this.handleChange,
                  value: username,
                  autoFocus: true,
                  required: true
                })
              ),
              _react2.default.createElement(
                "div",
                { className: "inputrow" },
                _react2.default.createElement("i", { className: "fa icon-key fa-fw" }),
                _react2.default.createElement("input", {
                  type: "password",
                  name: "password",
                  id: "password",
                  "data-typetoggle": "#show",
                  onChange: this.handleChange,
                  value: password,
                  placeholder: "Password",
                  required: true
                })
              ),
              _react2.default.createElement(
                "div",
                { className: "remember" },
                _react2.default.createElement("input", {
                  type: "checkbox",
                  name: "remember_login",
                  value: "1",
                  id: "remember_login"
                }),
                _react2.default.createElement(
                  "label",
                  { htmlFor: "remember_login", className: "radio" },
                  "Remember me"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "button-center" },
                _react2.default.createElement(
                  "button",
                  { className: "btn-log", type: "submit", id: "submit" },
                  "Login"
                ),
                loggingIn && _react2.default.createElement("img", { src: "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" })
              )
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  var _state$user = state.user,
      user = _state$user.user,
      loggingIn = _state$user.loggingIn;

  return {
    user: user,
    loggingIn: loggingIn
  };
};

var connectedLoginPage = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(Login));
exports.default = connectedLoginPage;

/***/ }),

/***/ "./src/containers/SingleWork.js":
/*!**************************************!*\
  !*** ./src/containers/SingleWork.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SingleWork = function (_Component) {
    _inherits(SingleWork, _Component);

    function SingleWork() {
        _classCallCheck(this, SingleWork);

        return _possibleConstructorReturn(this, (SingleWork.__proto__ || Object.getPrototypeOf(SingleWork)).apply(this, arguments));
    }

    _createClass(SingleWork, [{
        key: "render",
        value: function render() {
            var workId = this.props.match.params.workid;
            return _react2.default.createElement(
                "div",
                null,
                "this is ",
                workId
            );
        }
    }]);

    return SingleWork;
}(_react.Component);

exports.default = SingleWork;

/***/ }),

/***/ "./src/containers/WorksPage.js":
/*!*************************************!*\
  !*** ./src/containers/WorksPage.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./works.css */ "./src/containers/works.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorksPage = function (_Component) {
    _inherits(WorksPage, _Component);

    function WorksPage() {
        _classCallCheck(this, WorksPage);

        return _possibleConstructorReturn(this, (WorksPage.__proto__ || Object.getPrototypeOf(WorksPage)).apply(this, arguments));
    }

    _createClass(WorksPage, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { className: "work-page" },
                _react2.default.createElement(
                    "style",
                    null,
                    "\n                    .work-page {\n                        color: green;\n                    }\n                    \n                "
                ),
                _react2.default.createElement(
                    "div",
                    { className: "work-block" },
                    "this is ",
                    this.props.match.path,
                    " page"
                )
            );
        }
    }]);

    return WorksPage;
}(_react.Component);

exports.default = WorksPage;

/***/ }),

/***/ "./src/containers/blog.css":
/*!*********************************!*\
  !*** ./src/containers/blog.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/containers/home.css":
/*!*********************************!*\
  !*** ./src/containers/home.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/containers/login.css":
/*!**********************************!*\
  !*** ./src/containers/login.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/containers/works.css":
/*!**********************************!*\
  !*** ./src/containers/works.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(/*! redux */ "redux");

var _userReducer = __webpack_require__(/*! ./userReducer */ "./src/reducers/userReducer.js");

var _postReduser = __webpack_require__(/*! ./postReduser */ "./src/reducers/postReduser.js");

var reducers = (0, _redux.combineReducers)({
    user: _userReducer.user,
    posts: _postReduser.posts
});
exports.default = reducers;

/***/ }),

/***/ "./src/reducers/postReduser.js":
/*!*************************************!*\
  !*** ./src/reducers/postReduser.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
    fetching: false,
    fetched: false,
    posts: [],
    error: null
};

var posts = exports.posts = function posts() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case "FETCH_POSTS_START":
            {
                state = _extends({}, state, { fetching: true });
                break;
            }
        case "FETCH_POSTS_ERROR":
            {
                state = _extends({}, state, { fetching: false, error: action.payload });
                break;
            }
        case "RECIVED_POSTS":
            {
                state = _extends({}, state, {
                    fetching: false,
                    fetched: true,
                    users: action.payload
                });
                break;
            }
        case "ADD_POST":
            {
                state = _extends({}, state, { posts: [].concat(_toConsumableArray(state.posts), [action.payload]) });
                break;
            }
        case "UPDATE_POST":
            {
                var _action$payload = action.payload,
                    id = _action$payload.id,
                    title = _action$payload.title,
                    desc = _action$payload.desc,
                    content = _action$payload.content,
                    cotagory = _action$payload.cotagory,
                    img = _action$payload.img,
                    date = _action$payload.date,
                    userId = _action$payload.userId;

                var newPosts = [].concat(_toConsumableArray(state.posts));
                var postToUpdate = newPosts.findIndex(function (post) {
                    return post.id === id;
                });
                newPosts[postToUpdate] = action.payload;
                state = _extends({}, state, { posts: newPosts });
                break;
            }
        case "DELETE_POST":
            {
                state = _extends({}, state, { posts: state.posts.filter(function (post) {
                        return post.id !== action.payload;
                    }) });
                break;
            }
    }
    return state;
};

/***/ }),

/***/ "./src/reducers/userReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/userReducer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.user = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constances = __webpack_require__(/*! ../actions/constances */ "./src/actions/constances.js");

var initialState = {
    loggingIn: false,
    loggedIn: false,
    user: null,
    error: null
};

var user = exports.user = function user() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _constances.userConstants.LOGIN_REQUEST:
            {
                state = _extends({}, state, { loggingIn: true });
                break;
            }
        case _constances.userConstants.LOGIN_FAILURE:
            {
                state = _extends({}, state, { loggingIn: false, error: action.payload });
                break;
            }
        case _constances.userConstants.LOGIN_SUCCESS:
            {
                state = _extends({}, state, {
                    loggingIn: false,
                    loggedIn: true,
                    user: action.payload
                });
                break;
            }
        case _constances.userConstants.LOGOUT:
            {
                state = initialState;
                break;
            }
        case "ADD_USER":
            {
                state = _extends({}, state, { user: action.payload });
                break;
            }
        case "SET_USER_OPTIONS":
            {
                state = _extends({}, state, { options: action.payload });
                break;
            }
    }
    return state;
};

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configureStore = undefined;

var _redux = __webpack_require__(/*! redux */ "redux");

var _reduxLogger = __webpack_require__(/*! redux-logger */ "redux-logger");

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, _reduxLogger2.default);

var configureStore = function configureStore(preloadedState) {
    var store = (0, _redux.createStore)(_reducers2.default, preloadedState, middleware);
    return store;
};

exports.configureStore = configureStore;

/***/ }),

/***/ "./src/swiper.css":
/*!************************!*\
  !*** ./src/swiper.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "bourne":
/*!*************************!*\
  !*** external "bourne" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bourne");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-id-swiper":
/*!**********************************!*\
  !*** external "react-id-swiper" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-id-swiper");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),

/***/ "react-loadable/webpack":
/*!*****************************************!*\
  !*** external "react-loadable/webpack" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loadable/webpack");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map