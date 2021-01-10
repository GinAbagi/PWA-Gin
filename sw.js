//installeren van service worker
self.addEventListener('install', evt => {
    console.log('service worker has been installed');
});

//activeren van service worker
self.addEventListener('activate', evt =>{
    console.log('service worker has been activated');
});

//fetch event
self.addEventListener('fetch', evt =>{
    console.log('fetch event', evt);
});