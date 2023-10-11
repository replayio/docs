# WSL (deprecated)

## WSL Support

If you are unable to use the Windows build, WSL supports running Linux GUI apps on Windows starting with Windows 10 Insiders build 21362 or later. See the announcement here:

[The Initial Preview of GUI app support is now available for the Windows Subsystem for Linux | Windows Command Line](https://devblogs.microsoft.com/commandline/the-initial-preview-of-gui-app-support-is-now-available-for-the-windows-subsystem-for-linux-2/)

### Setting up your WSL environment

For detailed instruction on setting up your WSL environment, follow steps outlined in: 

[microsoft/wslg](https://github.com/microsoft/wslg#welcome-to-wslg)

For this setup, [the process is documented using the Ubuntu 20.04 distro](https://docs.microsoft.com/en-us/windows/wsl/install-manual#downloading-distros-via-the-command-line). Steps would be similar for other distros. We recommend installing your choice of browser and file manager. The link above provides steps for Edge and Nautilus.

### **Setting up Replay**

Once the environment is set up, Replay can be installed using a list of commands from the Ubuntu command line.

1. Download the Linux package of Replay.

```bash
sudo curl [https://replay.io/downloads/linux-replay.tar.bz2](https://replay.io/downloads/linux-replay.tar.bz2) -L -o /opt/linux-replay.tar.bz2
```

2. Extract the package.

```bash
cd /opt/
sudo tar -xvf linux-replay.tar.bz2
sudo rm -rf linux-replay.tar.bz2
```

3. Run the browser.

```bash
cd replay
sudo ./replay
```

The application should start 🎉

![WSL%20(deprecated)%20fdb2de4ce3eb4423a5419431b67cf2eb/Untitled.png](WSL%20(deprecated)%20fdb2de4ce3eb4423a5419431b67cf2eb/Untitled.png)

### **Troubleshooting**

There has been [a blog post](https://dev.to/arleneandrews/getting-to-explore-wsl2-3jlk) written (14 July 2021) on setting up the basic install. This might be a starting place if you have a problem with your installation.

If your installation returns errors with any shared dependencies, please install them from [https://ubuntu.pkgs.org/](https://ubuntu.pkgs.org/).

For example, to resolve the following error, install the package using [this link](https://ubuntu.pkgs.org/20.04/ubuntu-main-amd64/libdbus-glib-1-2_0.110-5fakssync1_amd64.deb.html).

```jsx
libdbus-glib-1.so.2: cannot open shared object file: No such file or directory
Couldn't load XPCOM.
```

You can also install the package via the command line like in the example below.

```bash
sudo apt-get install libdbus-glib-1-2
```