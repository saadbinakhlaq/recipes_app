FROM ruby:2.7.1-slim
LABEL maintainer="sba@xyz.com"

RUN apt-get update -qq && apt-get install -y build-essential

ENV APPDIR /opt/app
RUN mkdir -p $APPDIR
RUN gem install bundler

WORKDIR $APPDIR
COPY Gemfile ./
RUN bundle install
COPY . ./
EXPOSE 4567
CMD ["bundle", "exec", "shotgun", "config.ru", "-p", "80", "-s", "puma", "-o", "0.0.0.0"]