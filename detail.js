


const booksDatabase = {
    'tu-duy-nhanh-cham': {
        title: 'Sách: Tư Duy Nhanh Và Chậm',
        price: '112.000đ',
        img: 'book1.jpg',
        description: 'Một cuốn sách kinh điển về tâm lý học hành vi, giải thích hai hệ thống tư duy định hình cách chúng ta ra quyết định.'
    },
    'dung-bao-gio-an-mot-minh': {
        title: 'Sách: Đừng Bao Giờ Đi Ăn Một Mình',
        price: '98.000đ',
        img: 'book2.jpg',
        description: 'Cuốn sách bàn về sức mạnh của mạng lưới quan hệ và cách xây dựng các mối quan hệ ý nghĩa trong công việc và cuộc sống.'
    },
    'suc-manh-thoi-quen': {
        title: 'Sách: Sức Mạnh Của Thói Quen',
        price: '88.000đ',
        img: 'book3.jpg',
        description: 'Khám phá khoa học đằng sau việc hình thành thói quen và cách thay đổi chúng để cải thiện cuộc sống cá nhân và công việc.'
    },
    'doi-ngan-dung-ngu-dai': {
        title: 'Sách: Đời Ngắn Đừng Ngủ Dài',
        price: '76.000đ',
        img: 'book4.jpg',
        description: 'Những bài học cuộc sống sâu sắc từ Robin Sharma, giúp bạn sống có mục đích và tận dụng tối đa thời gian của mình.'
    },
    'quang-ganh-lo-di': {
        title: 'Sách: Quẳng Gánh Lo Đi Và Vui Sống',
        price: '80.000đ',
        img: 'book5.jpg',
        description: 'Tác phẩm kinh điển của Dale Carnegie cung cấp những phương pháp thực tiễn để loại bỏ lo lắng và sống một cuộc đời hạnh phúc hơn.'
    },
     'di-tim-le-song': {
        title: 'Sách: Đi Tìm Lẽ Sống',
        price: '110.000đ',
        img: 'book6.jpg',
        description: 'Một tác phẩm sâu sắc của Viktor Frankl về việc tìm kiếm ý nghĩa cuộc sống ngay cả trong những hoàn cảnh khắc nghiệt nhất.'
    },
    'dam-bi-ghet': {
        title: 'Sách: Dám Bị Ghét',
        price: '96.000đ',
        img: 'book7.jpg',
        description: 'Dựa trên tâm lý học Adler, cuốn sách thách thức những niềm tin giới hạn và khuyến khích sự tự do trong tư duy và hành động.'
    },
     'lam-chu-tu-duy': {
        title: 'Sách: Làm Chủ Tư Duy',
        price: '90.000đ',
        img: 'book8.jpg',
        description: 'Hướng dẫn cách thay đổi mô thức tư duy để đạt được thành công và hạnh phúc bền vững.'
    },
     'thuc-tinh-muc-dich-song': {
        title: 'Sách: Thức Tỉnh Mục Đích Sống',
        price: '105.000đ',
        img: 'book9.jpg',
        description: 'Cuốn sách giúp bạn khám phá và kết nối với mục đích sống sâu sắc của bản thân.'
    },
    'bat-dau-voi-cau-hoi-tai-sao': {
        title: 'Sách: Bắt Đầu Với Câu Hỏi Tại Sao',
        price: '115.000đ',
        img: 'book10.jpg',
        description: 'Simon Sinek giải thích tầm quan trọng của việc hiểu rõ "Tại sao" đằng sau mọi hành động để truyền cảm hứng và dẫn dắt hiệu quả.'
  },
    'doraemon': {
    title: 'Sách: Bộ Truyện Tranh Dành Cho Trẻ Em - Doraemon',
    price: '60.000đ',
    img: 'doraemon.jpg',
    description: 'Bộ truyện tranh kinh điển của Fujiko F. Fujio, kể về chú mèo máy Doraemon và những cuộc phiêu lưu thú vị cùng Nobita.'
},
'toan-lop-1': {
    title: 'Sách: Cùng Học Toán Lớp 1',
    price: '45.000đ',
    img: 'toan-lop-1.jpg',
    description: 'Tài liệu hỗ trợ học toán dành cho học sinh lớp 1, với bài tập phong phú và hình minh họa sinh động.'
},
'my-first-words': {
    title: 'Sách: Tiếng Anh Cho Bé - My First Words',
    price: '55.000đ',
    img: 'my-first-words.jpg',
    description: 'Sách học tiếng Anh cơ bản cho trẻ em, giới thiệu từ vựng qua hình ảnh đầy màu sắc.'
},
'truyen-co-tich': {
    title: 'Sách: Truyện Cổ Tích Việt Nam',
    price: '65.000đ',
    img: 'truyen-co-tich.jpg',
    description: 'Tuyển tập các câu chuyện cổ tích Việt Nam như Tấm Cám, Sọ Dừa, giúp trẻ hiểu văn hóa và giá trị truyền thống.'
},
'nguoi-dua-dieu': {
    title: 'Sách: Người Đua Diều',
    price: '120.000đ',
    img: 'nguoi-dua-dieu.jpg',
    description: 'Tiểu thuyết cảm động của Khaled Hosseini về tình bạn, sự phản bội và hành trình chuộc lỗi tại Afghanistan.'
},
'hoa-hoc-lop-9': {
    title: 'Sách: Hóa Học Lớp 9 - Bài Tập Nâng Cao',
    price: '72.000đ',
    img: 'hoa-hoc-lop-9.jpg',
    description: 'Sách bài tập hóa học nâng cao dành cho học sinh lớp 9, giúp chuẩn bị cho kỳ thi vào lớp 10.'
},
'english-grammar-in-use': {
    title: 'Sách: English Grammar in Use',
    price: '130.000đ',
    img: 'english-grammar-in-use.jpg',
    description: 'Sách ngữ pháp tiếng Anh nổi tiếng của Raymond Murphy, phù hợp cho học sinh và người học tiếng Anh trung cấp.'
},
   
    'dac-nhan-tam': {
        title: 'Đắc Nhân Tâm',
        price: '85.000đ',
        img: 'Đắc nhân tâm.jpg',
        description: 'Cuốn sách nghệ thuật giao tiếp và ứng xử kinh điển nhất mọi thời đại của Dale Carnegie.'
    },
    '7-thoi-quen': {
        title: '7 Thói Quen Hiệu Quả',
        price: '99.000đ',
        img: '7 thói quen hiệu quả.jpg',
        description: 'Stephen Covey trình bày 7 thói quen giúp con người sống và làm việc hiệu quả, đạt được sự cân bằng và thành công.'
    },
    'tuoi-tre-dang-gia': {
         title: 'Tuổi Trẻ Đáng Giá Bao Nhiêu',
         price: '76.000đ',
         img: 'Tuổi trẻ đáng giá bao nhiêu.jpg',
         description: 'Cuốn sách truyền cảm hứng cho người trẻ về việc sử dụng quãng thời gian tuổi trẻ một cách ý nghĩa.'
     },
    'nha-gia-kim': {
         title: 'Nhà Giả Kim',
         price: '79.000đ',
         img: 'Nhà giả kim.jpg',
         description: 'Câu chuyện phiêu lưu đầy triết lý của Paulo Coelho về hành trình theo đuổi ước mơ.'
     },
    'think-grow-rich': {
         title: 'Think and Grow Rich',
         price: '95.000đ',
         img: 'Think and grow.png',
         description: 'Napoleon Hill tiết lộ những bí mật tư duy đã giúp những người thành công nhất thế giới đạt được sự giàu có.'
     }
    
};


document.addEventListener('DOMContentLoaded', () => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get('bookId');

    
    const bookData = booksDatabase[bookId];

    
    const bookImgElement = document.getElementById('book-img');
    const bookTitleElement = document.getElementById('book-title');
    const bookPriceElement = document.getElementById('book-price');
    const bookDescriptionElement = document.getElementById('book-description');
    const pageTitleElement = document.querySelector('title'); 

    if (bookData) {
        
        bookImgElement.src = bookData.img;
        bookImgElement.alt = bookData.title; 
        bookTitleElement.textContent = bookData.title;
        bookPriceElement.textContent = `Giá: ${bookData.price}`;
        bookDescriptionElement.textContent = bookData.description;
        pageTitleElement.textContent = bookData.title; 
    } else {
        
        const detailContainer = document.querySelector('.book-detail-container');
        if(detailContainer) {
            detailContainer.innerHTML = '<h1>Không tìm thấy thông tin sách</h1><p>Vui lòng quay lại trang chủ.</p>';
        }
        pageTitleElement.textContent = 'Lỗi - Không tìm thấy sách';
    }
});