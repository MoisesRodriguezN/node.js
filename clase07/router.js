function route(pathname,handle) {
    if(typeof handle[pathname] == 'function') {
    return handle[pathname]();
  } else {
    return handle["/error404"]();
  }
}

exports.route = route;
