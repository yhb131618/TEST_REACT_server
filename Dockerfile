# 1단계: 빌드 환경
FROM node:alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2단계: 운영 환경
FROM nginx:alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
# 기본 Nginx 설정 외에 추가 설정이 필요하면 nginx.conf 파일을 컨테이너에 복사합니다.
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
