document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    signupForm.addEventListener('submit', function(event) {
        // 이벤트 기본 동작 막기
        event.preventDefault();
        
        // 이름, 이메일, 비밀번호, 비밀번호 확인 input 요소 가져오기
        const nameInput = signupForm.querySelector('input[type="text"][placeholder="이름"]');
        const emailInput = signupForm.querySelector('input[type="text"][placeholder="이메일"]');
        const passwordInput = signupForm.querySelector('input[type="password"][placeholder="비밀번호"]');
        const confirmPasswordInput = signupForm.querySelector('input[type="password"][placeholder="비밀번호 확인"]');
        
        // 이름, 이메일, 비밀번호, 비밀번호 확인 값 가져오기
        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        const confirmPasswordValue = confirmPasswordInput.value.trim();

        // 입력된 정보가 있는지 확인하고 빈칸이 있다면 알림창 띄우기
        if (!nameValue || !emailValue || !passwordValue || !confirmPasswordValue) {
            alert('입력되지 않은 정보가 있습니다');
            return;
        }

        // 비밀번호와 비밀번호 확인 값이 다른지 확인하고 다르다면 알림창 띄우기
        if (passwordValue !== confirmPasswordValue) {
            alert('비밀번호가 다릅니다');
            return;
        }

        // 여기에 나머지 서브밋 로직 작성
        // 예: 서버로 폼 데이터 전송
        // signupForm.submit();
    });
});
