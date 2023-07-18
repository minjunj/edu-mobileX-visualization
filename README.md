초안입니다

p class="w3-wide"><i class="insert want icon name "></i>Photography</p

위 태그는 아래의 주소에서 원하는 아이콘을 가져다 사용할 수 있습니다.
https://www.w3schools.com/icons/fontawesome_icons_webapp.asp 해당 링크를 참고하면 원하는 아이콘을 다운로드 없이 사용 가능합니다.


## Webcam Directory
webcam을 로컬이 아닌 외부로 뿌릴 땐 https로 뿌려줘야합니다. (js usermpdule api issue)

docker build -t {image name} .
docker run -p {host IP}:443:443 {iamge name}
순으로 빌드하면 무사히 올라갑니다.
무사 진입 후 get video를 누르면 캠이 작동합니다.

만약 캠이 작동되지 않는다면 이는 웹브라우저의 문제일 수 있습니다.
refer
https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
