>连接服务器
``ssh root@116.*.*.*``
---
>查看目录``ls -al ~/.ssh``
---
>创建密钥 ``ssh-keygen -t rsa -b 4096 -C "**@***.com"``
  <pre>
   Generating public/private rsa key pair.
    Enter file in which to save the key (/root/.ssh/id_rsa): 
    Enter passphrase (empty for no passphrase): 
    Enter same passphrase again: 
    Your identification has been saved in /root/.ssh/id_rsa.
    Your public key has been saved in /root/.ssh/id_rsa.pub.
    The key fingerprint is:
    **:**:f8:1d:61:**:*d:b8:**:e4:**:**:7c:02:c0:** **@**.com
    The key's randomart image is:
    +--[ RSA 4096]----+
    |+          ..o   |
    |E.      . . ...  |
    |oo .   o . ..    |
    |. + o o o o.     |
    +-----------------+
  
  </pre>

>进入目录  ``cd ~/.ssh/``

>更新配置文件 `sudo vim /etc/ssh/sshhd_config`
<pre>
    AddressFamily inet
    PermitRootLogin yes
    SyslogFacility AUTHPRIV
    ChallengeResponseAuthentication no
    PasswordAuthentication no
</pre>

>写入 `cat id_rsa.pub >> authorized_keys` 
>>`'>>'` 追加   
>>`'>'`覆盖

>开启SSH `systemctl enable sshd.service`

>启动SSH  `systemctl start  sshd.service`

>重启SSH  `systemctl restart  sshd.service`

>状态 `systemctl status  sshd.service`

>下载 id_rsa、id_rsa.pub  ，并且删除服务器这2个文件
