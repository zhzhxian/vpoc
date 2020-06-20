export function run(debug = false) {
    let request = {
        "size": 1,
        "count": 51,
        "delay": 100,
        "reset": true,
        "debug": debug
    }
    let url = "/jvm/gc/new";
    $.postJSON(url, request, (data) => console.log(`${url}: ${JSON.stringify(data)}`));
}

export function action(action = 'go') {
    let url = `/jvm/gc/debug/${action}`;
    $.postJSON(url, {}, (data) => console.log(`${url}: ${data}`));
}