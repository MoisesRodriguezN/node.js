function route(pathname,handle) {
    if(typeof handle[pathname] == 'function') {
    handle[pathname]();
  } else {
    handle["/error404"]();
  }
}

exports.route = route;
