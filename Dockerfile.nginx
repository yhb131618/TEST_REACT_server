# Nginx 공식 이미지를 베이스 이미지로 사용
FROM nginx:latest

# 기존 nginx.conf 파일 제거
RUN rm /etc/nginx/nginx.conf

# 호스트 시스템에서 수정된 nginx.conf 파일을 컨테이너로 복사
COPY nginx.conf /etc/nginx/nginx.conf

# 포트 80을 오픈하여 외부에 서비스 제공
EXPOSE 80

# Nginx 서비스 실행
CMD ["nginx", "-g", "daemon off;"]
