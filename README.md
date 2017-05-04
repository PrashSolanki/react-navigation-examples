# react-navigation examples

Examples to setup a project with react-navigation.

https://exp.host/@rmotr/react-navigation-examples

<p align="center">
  <img src="http://i.imgur.com/ywdkCOT.jpg">
</p>

<p align='center'>
  <a href="https://exp.host/@rmotr/react-navigation-examples">
    <img src="http://api.qrserver.com/v1/create-qr-code/?color=000000&amp;bgcolor=FFFFFF&amp;data=https%3A%2F%2Fexpo.io%2F%40rmotr%2Freact-navigation-examples&amp;qzone=1&amp;margin=0&amp;size=400x400&amp;ecc=L" alt="qr code" />
  </a>
</p>

## Install Guide

##### Install Expo CLI Client:
_(https://www.npmjs.com/package/exp)_

```sh
$ npm install -g exp
```

##### Signup for an Expo account:

```sh
$ exp signup
```

##### Login to Expo:

```sh
$ exp login
$ exp w  # who am I?
```

##### Clone this repo

```sh
$ git clone https://github.com/rmotr/react-navigation-examples.git
```

##### Install dependencies:

```sh
$ cd react-navigation-examples
$ npm install -d
```

## Usage Guide

Exponent works based on the current directory of your project. Execute all the following commands by `cd`ing into your project dir.

##### Starting app with Tunnel

If you use this option, you'll be able to share your app with anyone in the world. You'll be given a URL that you can share with your users. Your user will need the Exponent Mobile app installed in his/her device (Android +4.4, iOS +8).

```sh
$ exp start --tunnel --exp --dev
```

![image](https://cloud.githubusercontent.com/assets/872296/20674838/11733e7c-b569-11e6-88b6-1d6755efb35b.png)

##### Starting app in your Local Network (LAN)

This method will allow you to share your app just with people connected to the same network you're in. Just pass the `--lan` option instead of `--tunnel`.


```sh
$ exp start --lan --exp --dev
```

##### Starting app with a local simulator

To use this method you'll need to have a Simulator installed (either iOS or Android). Refer to [Exponent's docs](https://docs.getexponent.com/versions/v11.0.0/guides/debugging.html#using-a-simulator-emulator) for more about simulators.

```sh
$ exp start --lan --exp --dev
```

##### Running your app in device simulators

Once you have the correct simulator(s) installed in your platform, firing them up and running your app with them is simple. The hard part is usually installing them. Supposing that you've your simulator(s) correctly installed, starting it is as simple as:

```sh
$ exp start --ios
$ exp start --android
```

# Simulators

If you're on a mac (OS X) you'll have access to both iOS and Android simulators. If you're on PC or Linux you'll have access just to Android simulator.

## Android Simulator (Genymotion)

Setting up Genymotion is usually simple, but it takes some time. It's a boring process 😪. The easiest way to do it is by following Genymotion's official Install guide that has good details depending on your platform: [https://docs.genymotion.com/Content/01_Get_Started/Installation.htm](https://docs.genymotion.com/Content/01_Get_Started/Installation.htm). Once you have Genymotion installed, click on "Add Device":

![image](https://cloud.githubusercontent.com/assets/872296/20842160/54369770-b895-11e6-8fed-00d6bd76ca2c.png)

And select a device with Android version >= 4.4:

![image](https://cloud.githubusercontent.com/assets/872296/20842189/6e238a12-b895-11e6-99f8-c4c778b1fe57.png)

Once it's created, start it from Genymotion:

![image](https://cloud.githubusercontent.com/assets/872296/20842208/96a953d6-b895-11e6-9e29-1a5d44b032f1.png)


## iOS Simulator

First you'll have to install XCode (if not previously installed). The easiest way to do it is through itunes: [https://itunes.apple.com/app/xcode/id497799835](https://itunes.apple.com/app/xcode/id49779983). It'll take a while, go have a nap. Next, open up Xcode, go to _preferences_ and click the _Components_ tab, install a simulator from the list:

![Simulator List](https://docs.getexponent.com/_static/img/xcode-simulator.png)

---
<p align="center">
  <img src="http://i.imgur.com/JEIGdC6.png">
</p>
