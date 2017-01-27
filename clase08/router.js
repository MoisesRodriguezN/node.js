function route(pathname,handle,data) {
    if(typeof handle[pathname] == 'function') {
    return handle[pathname](data);
  } else {
    return handle["/error404"]();
  }
}

exports.route = route;
