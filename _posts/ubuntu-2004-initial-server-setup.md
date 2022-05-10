---
title: Ubuntu 20.04 - Initial Server Set-up
excerpt: Quick guide for setting up a Ubuntu 20.04 server initially.
coverImage: null
dateCreated: 2022-05-10T11:50:00Z
dateUpdated: 2022-05-10T11:55:00Z
author: carlos
ogImage: null
---

# Step 1 - Log in as Root

```shell
$ ssh root@server_ip
```

# Step 2 - Creating a New User

```shell
# adduser carlos
```

# Step 3 - Grant sudo to New User

```shell
# usermod -aG sudo carlos
```

Login with the user to confirm they have root access (Only works if you do not have logged in via SSH!).

```shell
# ssh carlos@localhost

$ sudo su
```

# Step 4 - Enable OpenSSH and UFW

List the UFW apps:

```shell
# ufw app list
```

Allow OpenSSH through UFW

```shell
# ufw allow OpenSSH
```

Enable UFW

```shell
# ufw enable
```

Check the UFW status

```shell
# ufw status
```

# Step 5 - Login with your New User

### If the `root` account uses password

```shell
$ ssh carlos@server_ip
```

### If the `root` account uses SSH key authentication

Sync the ssh key with the new user so you can login:

```shell
# rsync --archive --chown=carlos:carlos ~/.ssh /home/carlos
```

Log out and login again to your new account

```shell
$ ssh carlos@server_ip
```

### Test sudo works:

```shell
$ sudo su
```
