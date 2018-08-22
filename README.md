# OBS Remote Dashboard

This project was created by **TaiwanHex** team from Taiwan.

## Project Description

This project hacking into [Open Broadcaster Software](https://obsproject.com/) through WebSocket protocol.  We build an Web UI using Angular 6 that control everything in the [OBS Studio](https://obsproject.com/).  So the broadcaster can control what he want to present in the live streamming using additional mobile devices such as Mobile Phone, Tablet, or other laptop.

## Technology we used

* Angular 6.0.0
* Angular CLI 6.0.0
* Angular Material 6.0.1
* RxJS 6.0.0
* NGXS 3.0.1

## Getting Started

1. You need to install [OBS Studio](https://obsproject.com/) at first.
2. Then install the [obs-websocket](https://obsproject.com/forum/resources/obs-websocket-remote-control-of-obs-studio-made-easy.466/) plugin of the OBS Studio. [Download Here](https://github.com/Palakis/obs-websocket/releases/tag/4.3.3)
3. `git clone https://github.com/Hackbit/angularattack2018-taiwanhex.git`
4. `cd angularattack2018-taiwanhex`
5. `npm install`
6. `npm start`

## Usage

* Open **OBS Studio** software and configure some scenes.
* Navigate to http://localhost:4200/
* Hit the <kbd>Connect</kbd> button to login.
* Then control whatever you want for OBS Studio.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## References

* [Palakis/obs-websocket: WebSockets API for OBS Studio](https://github.com/Palakis/obs-websocket/)
  * [obs-websocket 4.3.2 protocol reference](https://github.com/Palakis/obs-websocket/blob/4.3.2/docs/generated/protocol.md)
  * [obs-websocket 4.3.2 protocol comments](https://github.com/Palakis/obs-websocket/blob/4.3.2/docs/generated/comments.json)
