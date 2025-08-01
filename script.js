document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const stockSearchInput = document.getElementById('stock-search');
    const stockItems = document.querySelectorAll('.stock-item');

    // 검색 버튼 클릭 시
    searchBtn.addEventListener('click', () => {
        const query = stockSearchInput.value.trim();
        if (query) {
            alert(`${query} 종목 분석 페이지로 이동합니다.`);
            // 실제로는 여기에 분석 페이지로 이동하는 코드를 작성합니다.
            // 예: window.location.href = `analysis.html?symbol=${query}`;
        } else {
            alert('검색할 종목을 입력해주세요.');
        }
    });

    // 인기 종목 버튼 클릭 시
    stockItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const query = e.target.textContent;
            alert(`${query} 종목 분석 페이지로 이동합니다.`);
            // 실제로는 여기에 분석 페이지로 이동하는 코드를 작성합니다.
            // 예: window.location.href = `analysis.html?symbol=${query.replace('$', '')}`;
        });
    });
});
