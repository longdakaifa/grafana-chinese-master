Grafana 6.7.4中文化版本


汉化步骤： 

克隆 github 仓库到本地，备份并停止本地服务器grafana，将github仓库中bin目录和public目录覆盖到本地服务器，重启grafana.

具体汉化步骤： 

1、备份public目录

mv /usr/share/grafana/public /usr/share/grafana/public.source

2、备份/usr/sbin/grafana-server和grafana-cli

cp /usr/sbin/grafana-server /usr/sbin/grafana-server.source

cp /usr/sbin/grafana-cli /usr/sbin/grafana-cli.source

3、停止grafana服务，拷贝grafana/bin/linux-amd64/grafana-server 和 grafana-cli /usr/sbin目录

systemctl stop grafana-server

/bin/cp -rp grafana/bin/linux-amd64/grafana-server /usr/sbin/

/bin/cp -rp grafana/bin/linux-amd64/grafana-cli /usr/sbin/

4、拷贝grafana/public 到 /usr/share/grafana/

/bin/cp -rp public /usr/share/grafana/

5、启动grafana-server

systemctl start grafana-server



