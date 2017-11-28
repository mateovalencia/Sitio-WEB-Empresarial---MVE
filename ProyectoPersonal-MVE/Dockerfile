FROM ubuntu:16.04

MAINTAINER Mateo Valencia Echeverry

RUN apt-get update
RUN apt-get -y install apache2

COPY ./Proyecto/ /var/www/html/

EXPOSE 80

ENTRYPOINT ["apache2ctl"]
CMD ["-DFOREGROUND"]