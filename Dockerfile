FROM centos:centos7

EXPOSE 3000

RUN yum -y install epel-release

RUN yum -y update && yum clean all

RUN yum -y install nodejs

RUN mkdir /usr/local/fileserver

WORKDIR /usr/local/fileserver

COPY . .

RUN npm install

CMD ["npm", "start"]
