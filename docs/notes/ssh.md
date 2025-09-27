# SSH
Introductory document to working with ssh keys and agents

[keys](#ssh-keys)
    [key checking](#how-to-check-if-you-have-a-ssh-key)
    [key generation](#generate-a-new-ssh-key)
    [public key sharing](#share-public-key)

[agents](#agents)
    [agent startup](#starting-ssh-agent)
    [agent adding keys](#adding-ssh-keys)

---

## SSH Keys

---

### How to check if you have a ssh key?
send a `ls ~/.ssh/` command.
If you only get `known_hosts` as a result you don't have a key set yet.


### Generate a new SSH key
Example command:
```sh
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Notes on command arguments:
`-t ed25519`: key type
`-C "your_email@example.com"`: label the key with your email

Press Enter to accept default file location (~/.ssh/id_ed25519)
Optionally you can add a passkey for extra security.


#### Results
The command should generate two documents:
~/.ssh/id_ed25519       ## your private key (keep secret!)
~/.ssh/id_ed25519.pub   ## your public key (this goes to GitHub)

### Share public key
Get the string value of your public key by using `cat`.

```sh
cat ~/.ssh/id_ed25519.pub
```

Note:
No need to add the label (what comes after the random string of characters.)

---

## Agents

---

### Starting ssh agent

The command below is used to start the ssh-agent in the background to keep the
ssh keys loaded.

```sh
eval "$(ssh-agent -s)"
```

### Adding ssh keys

Add your `ed25519` key using the command below:

```sh
ssh-add ~/.ssh/id_ed25519
```
