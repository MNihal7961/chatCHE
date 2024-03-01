function sendMessage() {
    var userInput = document.getElementById("user-input").value.toLowerCase().trim().replace(/\s+/g, '');
    var chatMessages = document.querySelector(".chat-body");

    if (!userInput) {
        var errorMessage = '<div class="chat-message bot-message error-message">Please enter a valid query</div>';
        chatMessages.innerHTML += errorMessage;
        document.getElementById("user-input").value = "";
        return;
    }

    var userMessage = '<div class="chat-message user-message">' + userInput + '</div>';
    chatMessages.innerHTML += userMessage;

    if (userInput === "jdtpolytechnic" || userInput === "ourcampus" || userInput === 'jdt' || userInput === 'institution') {
        var botResponse = '<div class="chat-message bot-message">HHM JDT Islam Polytechnic College is one of the most prestigious Polytechnic College in North Kerala. It was the first self-financing Polytechnic College to be sanctioned by the Government of Kerala. The college is approved by the All India Council for Technical Education. It was established in 1994 by the JDT Islam Orphanage and Educational Institutions. JDT Islam Orphanage is a charitable Institution established in 1922 for sheltering the orphan victims of the Malabar Rebellion of 1921. This Institution has now grown up to a big educational complex catering to the needs of the Orphans and Public. Courses in different fields like technical, non-technical, vocational, non-vocational, para-medical and University level are being conducted in this campus. HHM JDT Islam Polytechnic College has a longstanding reputation for academic excellence, employability and an unparalleled student experience. With more than 1500 students and a network of more than 9000 alumni, HHM JDT Islam Polytechnic has built a distinction for quality, integrity, research and innovation. The College is held in high regard by its students, alumni and the business, government and community sectors. The College imparts diploma courses of 3 years duration under the State Board of Technical Education, Kerala. The courses are unique with its hands-on and co-operative training, which prepares students to directly enter into their jobs as engineers, and enhances their network with the industry, which reflects positively on their future job opportunities. The courses offered are Diploma in Architecture Engineering, Civil Engineering, Computer Science Engineering, Electronics Engineering, Automobile Engineering, Hardware Engineering, Electrical and Electronics Engineering and Mechanical Engineering. All programmes are aligned with national priorities yet tailored to meet the demands and needs of the global employment market. With the support of industry experts, it integrates real-world practices with theory ensuring students are equipped to address complex technical problems. The faculty along with the excellent student population makes the campus one of the best places to study in the state. HHMJDT Islam Polytechnic College is considered to be one of the best Polytechnic Colleges with state of the art facilities. The broad base and co-operative experience have cultivated the learning, thinking and problem-solving abilities needed to adapt, to develop and to exercise responsible leadership through times of rapid change.</div>';
        chatMessages.innerHTML += botResponse;
    } else if (userInput === "whatischatche" || userInput === "chatche" || userInput === "chatche") {
        var botResponse = '<div class="chat-message bot-message">It\'s a chatbot.Developed by students from the Computer Hardware Department at JDT Islam Polytechnic College, this search bot simplifies accessing information about their institution and department. It offers quick and easy access to details such as courses offered, faculty information, campus facilities, upcoming events, and any other relevant updates. The tool aims to enhance communication and facilitate seamless information retrieval for students, faculty, and staff members within the college community.</div>';
        chatMessages.innerHTML += botResponse;
    } else if (userInput === "jdt" || userInput === "ourcollage") {
        var botResponse = '<div class="chat-message bot-message">HHM JDT Islam Polytechnic College is one of the most prestigious Polytechnic College in North Kerala. It was the first self-financing Polytechnic College to be sanctioned by the Government of Kerala. The college is approved by the All India Council for Technical Education. It was established in 1994 by the JDT Islam Orphanage and Educational Institutions. JDT Islam Orphanage is a charitable Institution established in 1922 for sheltering the orphan victims of the Malabar Rebellion of 1921. This Institution has now grown up to a big educational complex catering to the needs of the Orphans and Public. Courses in different fields like technical, non-technical, vocational, non-vocational, para-medical and University level are being conducted in this campus. HHM JDT Islam Polytechnic College has a longstanding reputation for academic excellence, employability and an unparalleled student experience. With more than 1500 students and a network of more than 9000 alumni, HHM JDT Islam Polytechnic has built a distinction for quality, integrity, research and innovation. The College is held in high regard by its students, alumni and the business, government and community sectors. The College imparts diploma courses of 3 years duration under the State Board of Technical Education, Kerala. The courses are unique with its hands-on and co-operative training, which prepares students to directly enter into their jobs as engineers, and enhances their network with the industry, which reflects positively on their future job opportunities. The courses offered are Diploma in Architecture Engineering, Civil Engineering, Computer Science Engineering, Electronics Engineering, Automobile Engineering, Hardware Engineering, Electrical and Electronics Engineering and Mechanical Engineering. All programmes are aligned with national priorities yet tailored to meet the demands and needs of the global employment market. With the support of industry experts, it integrates real-world practices with theory ensuring students are equipped to address complex technical problems. The faculty along with the excellent student population makes the campus one of the best places to study in the state. HHMJDT Islam Polytechnic College is considered to be one of the best Polytechnic Colleges with state of the art facilities. The broad base and co-operative experience have cultivated the learning, thinking and problem-solving abilities needed to adapt, to develop and to exercise responsible leadership through times of rapid change.</div>';
        chatMessages.innerHTML += botResponse;
    } else if (userInput === "staffs" || userInput === "teachers") {
        var botResponse = '<div class="chat-message bot-message">HHM JDT Islam Polytechnic College is one of the most prestigious Polytechnic College in North Kerala. It was the first self-financing Polytechnic College to be sanctioned by the Government of Kerala. The college is approved by the All India Council for Technical Education. It was established in 1994 by the JDT Islam Orphanage and Educational Institutions. JDT Islam Orphanage is a charitable Institution established in 1922 for sheltering the orphan victims of the Malabar Rebellion of 1921. This Institution has now grown up to a big educational complex catering to the needs of the Orphans and Public. Courses in different fields like technical, non-technical, vocational, non-vocational, para-medical and University level are being conducted in this campus. HHM JDT Islam Polytechnic College has a longstanding reputation for academic excellence, employability and an unparalleled student experience. With more than 1500 students and a network of more than 9000 alumni, HHM JDT Islam Polytechnic has built a distinction for quality, integrity, research and innovation. The College is held in high regard by its students, alumni and the business, government and community sectors. The College imparts diploma courses of 3 years duration under the State Board of Technical Education, Kerala. The courses are unique with its hands-on and co-operative training, which prepares students to directly enter into their jobs as engineers, and enhances their network with the industry, which reflects positively on their future job opportunities. The courses offered are Diploma in Architecture Engineering, Civil Engineering, Computer Science Engineering, Electronics Engineering, Automobile Engineering, Hardware Engineering, Electrical and Electronics Engineering and Mechanical Engineering. All programmes are aligned with national priorities yet tailored to meet the demands and needs of the global employment market. With the support of industry experts, it integrates real-world practices with theory ensuring students are equipped to address complex technical problems. The faculty along with the excellent student population makes the campus one of the best places to study in the state. HHMJDT Islam Polytechnic College is considered to be one of the best Polytechnic Colleges with state of the art facilities. The broad base and co-operative experience have cultivated the learning, thinking and problem-solving abilities needed to adapt, to develop and to exercise responsible leadership through times of rapid change.</div>';
        chatMessages.innerHTML += botResponse;
    } else if (userInput === 'hod' || userInput === "head" || userInput === "headofdepartment" || userInput === "abduljabbarc" || userInput === "abduljabbar" || userInput === "jabbar" || userInput === "abdul" || userInput === "headofcomputerhardwaredepartment") {
        var botResponse = '<div class="chat-message bot-message">' +
            '<div class="row d-flex justify-content-center align-items-center mt-2">' +
            '<div class="col col-md-9 col-lg-7 col-xl-5">' +
            '<div class="card" style="border-radius: 15px;">' +
            '<div class="card-body p-4">' +
            '<div class="d-flex text-black">' +
            '<div class="flex-shrink-0">' +
            '<img src="./public/images/t1.jpg" alt="Generic placeholder image" class="img-fluid mt-4" style="width: 100px; border-radius: 10px;">' +
            '</div>' +
            '<div class="flex-grow-1 ms-3">' +
            '<h5 class="mb-1">ABDUL JABBAR C P</h5>' +
            '<p class="mb-2 pb-1" style="color: #2b2a2a;">Head of Department</p>' +
            '<div class="d-flex justify-content-start rounded-3 p-2 mb-2" style="background-color: #efefef;">' +
            '<p class="small">Working as HOD in Computer Hardware Engineering Department at JDT Islam Polytechnic College from 2005 onwards.</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        chatMessages.innerHTML += botResponse;
    } else if (userInput === 'anu' || userInput === 'anutk') {
        var botResponse = '<div class="chat-message bot-message">' +
            '<div class="row d-flex justify-content-center align-items-center mt-2">' +
            '<div class="col col-md-9 col-lg-7 col-xl-5">' +
            '<div class="card" style="border-radius: 15px;">' +
            '<div class="card-body p-4">' +
            '<div class="d-flex text-black">' +
            '<div class="flex-shrink-0">' +
            '<img src="./public/images/t2.jpg" alt="Generic placeholder image" class="img-fluid mt-4" style="width: 100px; border-radius: 10px;">' +
            '</div>' +
            '<div class="flex-grow-1 ms-3">' +
            '<h5 class="mb-1">ANU T.K</h5>' +
            '<p class="mb-2 pb-1" style="color: #2b2a2a;">LECTURER</p>' +
            '<div class="d-flex justify-content-start rounded-3 p-2 mb-2" style="background-color: #efefef;">' +
            '<p class="small">Working as Lecturer in computer hardware engineering department 2015 onwards. State Level NSS Best Program officer award winner in the year 2014-2015. Association in-charge Computer hardware engineering Dept.</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        chatMessages.innerHTML += botResponse;
    } else if (userInput === 'athulya' || userInput === 'athulyas') {
        var botResponse = '<div class="chat-message bot-message">' +
            '<div class="row d-flex justify-content-center align-items-center mt-2">' +
            '<div class="col col-md-9 col-lg-7 col-xl-5">' +
            '<div class="card" style="border-radius: 15px;">' +
            '<div class="card-body p-4">' +
            '<div class="d-flex text-black">' +
            '<div class="flex-shrink-0">' +
            '<img src="./public/images/t3.jpg" alt="Generic placeholder image" class="img-fluid mt-4" style="width: 100px; border-radius: 10px;">' +
            '</div>' +
            '<div class="flex-grow-1 ms-3">' +
            '<h5 class="mb-1">ATHULYA S</h5>' +
            '<p class="mb-2 pb-1" style="color: #2b2a2a;">LECTURER</p>' +
            '<div class="d-flex justify-content-start rounded-3 p-2 mb-2" style="background-color: #efefef;">' +
            '<p class="small">WORKING AS LECTURER IN COMPUTER HARDWARE ENGINEERING.JOINED THE INSTITUTE ON 10TH JANUARY 2021.</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        chatMessages.innerHTML += botResponse;
    } else if (userInput === 'muhammedriyas' || userInput === 'riyas' || userInput === 'riyasf' || userInput === 'muhammedriyasf') {
        var botResponse = '<div class="chat-message bot-message">' +
            '<div class="row d-flex justify-content-center align-items-center mt-2">' +
            '<div class="col col-md-9 col-lg-7 col-xl-5">' +
            '<div class="card" style="border-radius: 15px;">' +
            '<div class="card-body p-4">' +
            '<div class="d-flex text-black">' +
            '<div class="flex-shrink-0">' +
            '<img src="./public/images/t4.jpg" alt="Generic placeholder image" class="img-fluid mt-4" style="width: 100px; border-radius: 10px;">' +
            '</div>' +
            '<div class="flex-grow-1 ms-3">' +
            '<h5 class="mb-1">MUHAMMED RIYAS F</h5>' +
            '<p class="mb-2 pb-1" style="color: #2b2a2a;">LECTURER</p>' +
            '<div class="d-flex justify-content-start rounded-3 p-2 mb-2" style="background-color: #efefef;">' +
            '<p class="small">JOINED THE INSTITUTE ON 05TH JUNE 2012</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        chatMessages.innerHTML += botResponse;
    } else if (userInput === 'nimisha' || userInput === 'nimishap') {
        var botResponse = '<div class="chat-message bot-message">' +
            '<div class="row d-flex justify-content-center align-items-center mt-2">' +
            '<div class="col col-md-9 col-lg-7 col-xl-5">' +
            '<div class="card" style="border-radius: 15px;">' +
            '<div class="card-body p-4">' +
            '<div class="d-flex text-black">' +
            '<div class="flex-shrink-0">' +
            '<img src="./public/images/t5.jpg" alt="Generic placeholder image" class="img-fluid mt-4" style="width: 100px; border-radius: 10px;">' +
            '</div>' +
            '<div class="flex-grow-1 ms-3">' +
            '<h5 class="mb-1">NIMISHA P</h5>' +
            '<p class="mb-2 pb-1" style="color: #2b2a2a;">LECTURER</p>' +
            '<div class="d-flex justify-content-start rounded-3 p-2 mb-2" style="background-color: #efefef;">' +
            '<p class="small">working as a lecturer in Computer hardware Engineering. JOINED THE INSTITUTE ON 10TH JANUARY 2022.</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        chatMessages.innerHTML += botResponse;
    } else if (userInput === 'fathima' || userInput === 'fathimaanjoompv' || userInput === 'fathimaanjoom' || userInput === 'anjoompv' || userInput === 'anjoom') {
        var botResponse = '<div class="chat-message bot-message">' +
            '<div class="row d-flex justify-content-center align-items-center mt-2">' +
            '<div class="col col-md-9 col-lg-7 col-xl-5">' +
            '<div class="card" style="border-radius: 15px;">' +
            '<div class="card-body p-4">' +
            '<div class="d-flex text-black">' +
            '<div class="flex-shrink-0">' +
            '<img src="./public/images/t6.jpg" alt="Generic placeholder image" class="img-fluid mt-4" style="width: 100px; border-radius: 10px;">' +
            '</div>' +
            '<div class="flex-grow-1 ms-3">' +
            '<h5 class="mb-1">FATHIMA ANJOOM P.V</h5>' +
            '<p class="mb-2 pb-1" style="color: #2b2a2a;">DEMONSTRATOR</p>' +
            '<div class="d-flex justify-content-start rounded-3 p-2 mb-2" style="background-color: #efefef;">' +
            '<p class="small">Working as a demonstrator from 2018 onwards. JOINED THE INSTITUTE ON 19 JULY 2018.</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        chatMessages.innerHTML += botResponse;
    } else if (userInput === 'sandhya' || userInput === 'snadhyaek' || userInput === 'sandhya.ek') {
        var botResponse = '<div class="chat-message bot-message">' +
            '<div class="row d-flex justify-content-center align-items-center mt-2">' +
            '<div class="col col-md-9 col-lg-7 col-xl-5">' +
            '<div class="card" style="border-radius: 15px;">' +
            '<div class="card-body p-4">' +
            '<div class="d-flex text-black">' +
            '<div class="flex-shrink-0">' +
            '<img src="./public/images/t7.jpg" alt="Generic placeholder image" class="img-fluid mt-4" style="width: 100px; border-radius: 10px;">' +
            '</div>' +
            '<div class="flex-grow-1 ms-3">' +
            '<h5 class="mb-1">SANDHYA E.K</h5>' +
            '<p class="mb-2 pb-1" style="color: #2b2a2a;">DEMONSTRATOR</p>' +
            '<div class="d-flex justify-content-start rounded-3 p-2 mb-2" style="background-color: #efefef;">' +
            '<p class="small">DOING BE. JOINED THE INSTITUTE ON 03RD JULY 2006.</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        chatMessages.innerHTML += botResponse;
    } else if (userInput === 'muhammedkabeerp' || userInput === 'kabeer' || userInput === 'kabeer.p' || userInput === 'muhammedkabeer.p') {
        var botResponse = '<div class="chat-message bot-message">' +
            '<div class="row d-flex justify-content-center align-items-center mt-2">' +
            '<div class="col col-md-9 col-lg-7 col-xl-5">' +
            '<div class="card" style="border-radius: 15px;">' +
            '<div class="card-body p-4">' +
            '<div class="d-flex text-black">' +
            '<div class="flex-shrink-0">' +
            '<img src="./public/images/t8.jpg" alt="Generic placeholder image" class="img-fluid mt-4" style="width: 100px; border-radius: 10px;">' +
            '</div>' +
            '<div class="flex-grow-1 ms-3">' +
            '<h5 class="mb-1">MUHAMED KABEEER P</h5>' +
            '<p class="mb-2 pb-1" style="color: #2b2a2a;">TRADE INSTRUCTOR</p>' +
            '<div class="d-flex justify-content-start rounded-3 p-2 mb-2" style="background-color: #efefef;">' +
            '<p class="small">Working as Trade Instructor in Computer Hardware Department jdt islam Polytechnic College 2005 onwards also Working as Technician in Computer Hardware Field. JOINED THE INSTITUTE ON 19 SEPTEMBER 2005.</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        chatMessages.innerHTML += botResponse;
    } else if (userInput === 'shamnad.e' || userInput === 'shamnad' || userInput === 'shamnadumer.e' || userInput === 'shamnadumere' || userInput === 'umer' || userInput === 'umer.e') {
        var botResponse = '<div class="chat-message bot-message">' +
            '<div class="row d-flex justify-content-center align-items-center mt-2">' +
            '<div class="col col-md-9 col-lg-7 col-xl-5">' +
            '<div class="card" style="border-radius: 15px;">' +
            '<div class="card-body p-4">' +
            '<div class="d-flex text-black">' +
            '<div class="flex-shrink-0">' +
            '<img src="./public/images/t9.jpg" alt="Generic placeholder image" class="img-fluid mt-4" style="width: 100px; border-radius: 10px;">' +
            '</div>' +
            '<div class="flex-grow-1 ms-3">' +
            '<h5 class="mb-1">SHAMNAD UMER E</h5>' +
            '<p class="mb-2 pb-1" style="color: #2b2a2a;">TRADE INSTRUCTOR</p>' +
            '<div class="d-flex justify-content-start rounded-3 p-2 mb-2" style="background-color: #efefef;">' +
            '<p class="small">Working as Trade Instructor In Computer Hardware Engineering Department at Jdt Islam Polytechnic College Since December 2013. JOINED THE INSTITUTE ON 12TH DECEMBER 2013.</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        chatMessages.innerHTML += botResponse;
    } else if (userInput === 'lecturer' || userInput === 'lecture' || userInput === 'teacher' || userInput === 'teachers' || userInput === 'tutors') {
        var botResponse = `<div class="chat-message bot-message">
<div class="row">
    <div class="col-12 col-sm-8 col-lg-5">
        <h6 class="text-muted">Lecturers</h6>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ANU T.K
                <div class="image-parent">
                    <img src="./public/images/t2.jpg" class="img-fluid" alt="quixote">
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ATHULYA S
                <div class="image-parent">
                    <img src="./public/images/t3.jpg" class="img-fluid" alt="quixote">
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                MUHAMMED RIYAS F
                <div class="image-parent">
                    <img src="./public/images/t4.jpg" class="img-fluid" alt="quixote">
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                NIMISHA P
                <div class="image-parent">
                    <img src="./public/images/t5.jpg" class="img-fluid" alt="quixote">
                </div>
            </li>
        </ul>
    </div>
</div>
</div>`;
        chatMessages.innerHTML += botResponse;
    } else if (userInput === 'demonstrator' || userInput === 'demonstrators') {
        var botResponse = `<div class="chat-message bot-message">
<div class="row">
    <div class="col-12 col-sm-8 col-lg-5">
        <h6 class="text-muted">DEMONSTRATORS</h6>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                FATHIMA ANJOOM P.V
                <div class="image-parent">
                    <img src="./public/images/t6.jpg" class="img-fluid" alt="quixote">
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                SANDHYA E.K
                <div class="image-parent">
                    <img src="./public/images/t7.jpg" class="img-fluid" alt="quixote">
                </div>
            </li>
        </ul>
    </div>
</div>
</div>`;
        chatMessages.innerHTML += botResponse;
    } else if (userInput === 'tradeinstructor' || userInput === "trade" || userInput === 'instructor') {
        var botResponse = `<div class="chat-message bot-message">
<div class="row">
    <div class="col-12 col-sm-8 col-lg-5">
        <h6 class="text-muted">TRADE INSTRUCTOR</h6>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                MUHAMED KABEEER P
                <div class="image-parent">
                    <img src="./public/images/t8.jpg" class="img-fluid" alt="quixote">
                </div>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                SHAMNAD UMER E
                <div class="image-parent">
                    <img src="./public/images/t9.jpg" class="img-fluid" alt="quixote">
                </div>
            </li>
        </ul>
    </div>
</div>
</div>`;
        chatMessages.innerHTML += botResponse;
    } else if (userInput === 'techcult22' || userInput === 'techcult') {
        var botResponse = `<div class="container mt-2">
<div class="row gy-3 gy-md-4 gy-lg-0">
    <div class="col-12 col-lg-6">
        <div class="card bg-light p-3 m-0">
            <div class="row gy-3 gy-md-0 align-items-md-center">
                <div class="col-md-5">
                    <img src="./public/images/tech.jpg" class="img-fluid rounded-start" alt="Why Choose Us?">
                </div>
                <div class="col-md-7">
                    <div class="card-body p-0">
                        <h2 class="card-title h4 mb-3">TECHCULT'22</h2>
                        <p class="small ">The COMPUTER HARDWARE ENGINEERING ASSOCIATION PROGRAMME was
                            conducted on November 16, 2022. The chief guest for the event was Sajid Rahman M,
                            who holds the position of senior cybersecurity architect. During the programme,
                            Sajid Rahman M shared valuable insights and expertise with the attendees, shedding
                            light on the latest developments and challenges in the field of cybersecurity.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`;
        chatMessages.innerHTML += botResponse;
    } else if (userInput === 'aboutthecourse' || userInput === 'course' || userInput === 'syllabus' || userInput === 'subjects') {
        var botResponse = '<div class="chat-message bot-message"><div class="container table-responsive py-5">' +
            '<table class="table table-bordered table-hover">' +
            '<thead>' +
            '<tr class="text-center">' +
            '<th scope="col">PROGRAM NAME : Computer Hardware Engineering</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<th><strong>PROGRAM CODE : </strong> <span class="text-muted"> CM</span></th>' +
            '</tr>' +
            '<tr>' +
            '<th><strong>PATTERN: </strong> <span class="text-muted"> FULL TIME</span></th>' +
            '</tr>' +
            '<tr>' +
            '<th><strong>DURATION OF PROGRAMME: </strong> <span class="text-muted"> 3 YEARS (6 SEMESTERS)</span>' +
            '</th>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '<p>' +
            'Computer hardware engineers research, design, develop, and test computer systems and components such as ' +
            'processors, circuit boards, memory devices, networks, and routers.' +
            '</p>' +
            '</div></div>';
        chatMessages.innerHTML += botResponse;
    } else if (userInput === 'break' || userInput === 'workinghours' || userInput === 'timing' || userInput === 'worktime' || userInput === 'schedule') {
        var botResponse = '<div class="chat-message bot-message"><div class="container table-responsive py-5">' +
            '<div class="container table-responsive py-5">' +
            '<table class="table table-bordered table-hover">' +
            '<thead>' +
            '<tr class="text-center">' +
            '<th scope="col">WORKING HOURS</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<th><strong>9:30 AM TO 12:30 PM : </strong> <span class="text-muted">WORKING TIME</span></th>' +
            '</tr>' +
            '<tr>' +
            '<th><strong>12:30 PM TO 1:30 PM : </strong> <span class="text-muted">LUNCH BREAK</span></th>' +
            '</tr>' +
            '<tr>' +
            '<th><strong>1:30 PM TO 4:30 PM : </strong> <span class="text-muted">WORKING TIME</span>' +
            '</th>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div></div>';
        chatMessages.innerHTML += botResponse;
    } else if (userInput === 'semester1' || userInput === 'semsterone' || userInput === 'firstsem' || userInput === 'sem1' || userInput === 'semesterfirst') {
        var botResponse = '<div class="chat-message bot-message"><div class="container table-responsive py-5">' +
            '<div class="container table-responsive py-5 text-center">' +
            '<table class="table table-bordered table-hover">' +
            '<h3 class="mb-4 text-decoration-underline">SEMESTER ONE (SEM:1)</h3>' +
            '<thead>' +
            '<tr class="text-start">' +
            '<th scope="col">SI NO</th>' +
            '<th scope="col">Course Category</th>' +
            '<th scope="col">Course Code</th>' +
            '<th scope="col">Course Name</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<th>1</th>' +
            '<th>Humanities & Social Sciences</th>' +
            '<th>1001</th>' +
            '<th>Communication Skills in English</th>' +
            '</tr>' +
            '<tr>' +
            '<th>2</th>' +
            '<th>Basic Science</th>' +
            '<th>1002</th>' +
            '<th>Mathematics I</th>' +
            '</tr>' +
            '<tr>' +
            '<th>3</th>' +
            '<th>Basic Science</th>' +
            '<th>1003</th>' +
            '<th>Applied Physics I</th>' +
            '</tr>' +
            '<tr>' +
            '<th>4</th>' +
            '<th>Basic Science</th>' +
            '<th>1004</th>' +
            '<th>Applied Chemistry</th>' +
            '</tr>' +
            '<tr>' +
            '<th>5</th>' +
            '<th>Engineering Science</th>' +
            '<th>1005</th>' +
            '<th>Engineering Graphics</th>' +
            '</tr>' +
            '<tr>' +
            '<th>6</th>' +
            '<th>Basic Science</th>' +
            '<th>2006</th>' +
            '<th>Applied Physics Lab</th>' +
            '</tr>' +
            '<tr>' +
            '<th>7</th>' +
            '<th>Basic Science</th>' +
            '<th>1007</th>' +
            '<th>Applied Chemistry Lab</th>' +
            '</tr>' +
            '<tr>' +
            '<th>8</th>' +
            '<th>Engineering Science</th>' +
            '<th>1008</th>' +
            '<th>Introduction to IT systems Lab</th>' +
            '</tr>' +
            '<tr>' +
            '<th>9</th>' +
            '<th>Engineering Science</th>' +
            '<th>2009</th>' +
            '<th>Engineering Workshop Practice</th>' +
            '</tr>' +
            '<tr>' +
            '<th>10</th>' +
            '<th>Humanities & Social Sciences</th>' +
            '<th>1009</th>' +
            '<th>Sports and Yoga</th>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div></div>';
        chatMessages.innerHTML += botResponse;
    } else if (userInput === 'sem2' || userInput === 'semester2' || userInput === 'semestertwo' || userInput === 'secondsem' || userInput === 'secondsemester') {
        var botResponse = '<div class="chat-message bot-message"><div class="container table-responsive py-5 text-center">' +
            '<table class="table table-bordered table-hover">' +
            '<h3 class="mb-4 text-decoration-underline">SEMESTER TWO (SEM:2)</h3>' +
            '<thead>' +
            '<tr class="text-start">' +
            '<th scope="col">SI NO</th>' +
            '<th scope="col">Course Category</th>' +
            '<th scope="col">Course Code</th>' +
            '<th scope="col">Course Name</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<th>1</th>' +
            '<th>Basic Science</th>' +
            '<th>2002</th>' +
            '<th>Mathematics II</th>' +
            '</tr>' +
            '<tr>' +
            '<th>2</th>' +
            '<th>Basic Science</th>' +
            '<th>2003</th>' +
            '<th>Applied Physics II</th>' +
            '</tr>' +
            '<tr>' +
            '<th>3</th>' +
            '<th>Common Courses</th>' +
            '<th>2001</th>' +
            '<th>Environmental Science</th>' +
            '</tr>' +
            '<tr>' +
            '<th>4</th>' +
            '<th>Engineering Science</th>' +
            '<th>2031</th>' +
            '<th>Fundamentals of Electrical & Electronics Engineering</th>' +
            '</tr>' +
            '<tr>' +
            '<th>5</th>' +
            '<th>Engineering Science</th>' +
            '<th>2131</th>' +
            '<th>Problem Solving and Programming</th>' +
            '</tr>' +
            '<tr>' +
            '<th>6</th>' +
            '<th>Humanities & Social Sciences</th>' +
            '<th>2008</th>' +
            '<th>Communication Skills in English Lab</th>' +
            '</tr>' +
            '<tr>' +
            '<th>7</th>' +
            '<th>Basic Science</th>' +
            '<th>2006</th>' +
            '<th>Applied Physics Lab</th>' +
            '</tr>' +
            '<tr>' +
            '<th>8</th>' +
            '<th>Engineering Science</th>' +
            '<th>2039</th>' +
            '<th>Fundamentals of Eletrical & Electronics Engineering Lab</th>' +
            '</tr>' +
            '<tr>' +
            '<th>9</th>' +
            '<th>Engineering Science</th>' +
            '<th>2139</th>' +
            '<th>Problem Solving and Programming Lab</th>' +
            '</tr>' +
            '<tr>' +
            '<th>10</th>' +
            '<th>Engineering Science</th>' +
            '<th>2009</th>' +
            '<th>Engineering Workshop Practice</th>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div></div>';
        chatMessages.innerHTML += botResponse;
    } else if (userInput === 'sem3' || userInput === 'semester3' || userInput === 'semesterthree' || userInput === 'thirdsem' || userInput === 'thirdsemester') {
        var botResponse = '<div class="chat-message bot-message"><div class="container table-responsive py-5 text-center">' +
            '<table class="table table-bordered table-hover">' +
            '<h3 class="mb-4 text-decoration-underline">SEMESTER THREE (SEM:3)</h3>' +
            '<thead>' +
            '<tr class="text-start">' +
            '<th scope="col">SI NO</th>' +
            '<th scope="col">Course Category</th>' +
            '<th scope="col">Course Code</th>' +
            '<th scope="col">Course Name</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<th>1</th>' +
            '<th>Programme core course</th>' +
            '<th>3151</th>' +
            '<th>Computer System Architecture</th>' +
            '</tr>' +
            '<tr>' +
            '<th>2</th>' +
            '<th>Programme core course</th>' +
            '<th>3132</th>' +
            '<th>Programming in C</th>' +
            '</tr>' +
            '<tr>' +
            '<th>3</th>' +
            '<th>Programme core course</th>' +
            '<th>3152</th>' +
            '<th>Computer Networks I</th>' +
            '</tr>' +
            '<tr>' +
            '<th>4</th>' +
            '<th>Programme core course</th>' +
            '<th>3154</th>' +
            '<th>Digital Computer Fundamentals</th>' +
            '</tr>' +
            '<tr>' +
            '<th>5</th>' +
            '<th>Programme core course</th>' +
            '<th>3135</th>' +
            '<th>Programming in C Lab</th>' +
            '</tr>' +
            '<tr>' +
            '<th>6</th>' +
            '<th>Programme core course</th>' +
            '<th>3157</th>' +
            '<th>System Administration Lab</th>' +
            '</tr>' +
            '<tr>' +
            '<th>7</th>' +
            '<th>Programme core course</th>' +
            '<th>3151</th>' +
            '<th>Digital Computer Fundamentals Lab</th>' +
            '</tr>' +
            '<tr>' +
            '<th>8</th>' +
            '<th>Programme core course</th>' +
            '<th>3158</th>' +
            '<th>Computer Hardware Lab I</th>' +
            '</tr>' +
            '<tr>' +
            '<th>9</th>' +
            '<th>Programme core course</th>' +
            '<th>3159</th>' +
            '<th>Application Development Lab</th>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div></div>';
        chatMessages.innerHTML += botResponse;
    } else if (userInput === 'sem5' || userInput === 'semester5' || userInput === 'semesterfive' || userInput === 'fifthsem' || userInput === 'fifthsemester') {
        var botResponse = '<div class="chat-message bot-message">  <div class="container table-responsive py-5 text-center">' +
            '<table class="table table-bordered table-hover">' +
            '<h3 class="mb-4 text-decoration-underline">SEMESTER FIVE (SEM:5)</h3>' +
            '<thead>' +
            '<tr class="text-center">' +
            '<th scope="col">SI NO</th>' +
            '<th scope="col">Course Category</th>' +
            '<th scope="col">Course Code</th>' +
            '<th scope="col">Course Name</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr class="text-start">' +
            '<td>1</td>' +
            '<td>Common Courses</td>' +
            '<td>5002</td>' +
            '<td>Project Management and Software Engineering</td>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<td>2</td>' +
            '<td>Programme core course</td>' +
            '<td>5132</td>' +
            '<td>Internet of Things</td>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<td>3</td>' +
            '<td>Program Elective course</td>' +
            '<td>5133A</td>' +
            '<td>Operating System</td>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<td>4</td>' +
            '<td>Program Elective course</td>' +
            '<td>5133A</td>' +
            '<td>Virtualisation Technology and Cloud Computing</td>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<td>5</td>' +
            '<td>Programme core course</td>' +
            '<td>5157</td>' +
            '<td>Internet of Things Lab</td>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<td>6</td>' +
            '<td>Programme core course</td>' +
            '<td>5158</td>' +
            '<td>Network Administration Lab II</td>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<td>7</td>' +
            '<td>Program Elective course</td>' +
            '<td>5139A</td>' +
            '<td>Virtualisation Technology and cloud computing Lab</td>' + // Corrected closing tag here
            '</tr>' +
            '<tr class="text-start">' +
            '<td>8</td>' +
            '<td>Seminar</td>' +
            '<td>5008</td>' +
            '<td>Seminar</td>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<td>9</td>' +
            '<td>Major Project</td>' +
            '<td>6009</td>' +
            '<td>Major Project</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div></div>';
        chatMessages.innerHTML += botResponse;
    } else if (userInput === 'sem4' || userInput === 'semester4' || userInput === 'semesterfour' || userInput === 'fourthsem' || userInput === 'fourthsemester') {
        var botResponse = '<div class="chat-message bot-message">  <div class="container table-responsive py-5 text-center">' +
            '<table class="table table-bordered table-hover">' +
            '<h3 class="mb-4 text-decoration-underline">SEMESTER FOUR (SEM:4)</h3>' +
            '<thead>' +
            '<tr class="text-center">' +
            '<th scope="col">SI NO</th>' +
            '<th scope="col">Course Category</th>' +
            '<th scope="col">Course Code</th>' +
            '<th scope="col">Course Name</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr class="text-start">' +
            '<td>1</td>' +
            '<td>Programme core course</td>' +
            '<td>4131</td>' +
            '<td>Object Oriented Programming</td>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<td>2</td>' +
            '<td>Programme core course</td>' +
            '<td>4151</td>' +
            '<td>Computer Networks II</td>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<td>3</td>' +
            '<td>Programme core course</td>' +
            '<td>4152</td>' +
            '<td>Embedded System and Real time Operating System</td>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<td>4</td>' +
            '<td>Common Courses</td>' +
            '<td>4001</td>' +
            '<td>Community Skills in Indian knowledge system</td>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<td>5</td>' +
            '<td>Programme core course</td>' +
            '<td>4136</td>' +
            '<td>Object Oriented Programming Lab</td>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<td>6</td>' +
            '<td>Programme core course</td>' +
            '<td>4157</td>' +
            '<td>Network Administration Lab I</td>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<td>7</td>' +
            '<td>Programme core course</td>' +
            '<td>4158</td>' +
            '<td>Embedded system Lab</td>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<td>8</td>' +
            '<td>Programme core course</td>' +
            '<td>4159</td>' +
            '<td>Computer Hardware Lab II</td>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<td>9</td>' +
            '<td>Minor project</td>' +
            '<td>4006</td>' +
            '<td>Minor project</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div></div>';
        chatMessages.innerHTML += botResponse;
    } else if (userInput === 'sem6' || userInput === 'semester6' || userInput === 'semestersix' || userInput === 'sixthsem' || userInput === 'sixthsemester') {
        var botResponse = '<div class="chat-message bot-message">  <div class="container table-responsive py-5 text-center">' +
            '<table class="table table-bordered table-hover">' +
            '<h3 class="mb-4 text-decoration-underline">SEMESTER SIX (SEM:6)</h3>' +
            '<thead>' +
            '<tr class="text-center">' +
            '<th scope="col">SI NO</th>' +
            '<th scope="col">Course Category</th>' +
            '<th scope="col">Course Code</th>' +
            '<th scope="col">Course Name</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr class="text-start">' +
            '<td>1</td>' +
            '<td>Humanities & Social Sciences</td>' +
            '<td>6001</td>' +
            '<td>Entrepreneurship and Startup</td>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<td>2</td>' +
            '<td>Program Elective course</td>' +
            '<td>6131C</td>' +
            '<td>Software Testing</td>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<td>3</td>' +
            '<td>Program Elective course</td>' +
            '<td>6132A</td>' +
            '<td>Introduction to IoT</td>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<td>4</td>' +
            '<td>Common Courses</td>' +
            '<td>6002</td>' + // Corrected course code here
            '<td>Indian Constitution</td>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<td>5</td>' +
            '<td>Programme core course</td>' +
            '<td>6157</td>' +
            '<td>Programming Smart Device Lab</td>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<td>6</td>' +
            '<td>Programme core course</td>' +
            '<td>6158</td>' +
            '<td>Ethical Hacking Lab</td>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<td>7</td>' +
            '<td>Program Elective course</td>' +
            '<td>6139C</td>' +
            '<td>Software Testing Lab</td>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<td>8</td>' +
            '<td>Major Project</td>' +
            '<td>6009</td>' +
            '<td>Major Project</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div></div>';
        chatMessages.innerHTML += botResponse;
    } else if (userInput === 'internship' || userInput === 'pathway' || userInput === 'internshippathway' || userInput === 'semsixinternship' || userInput === 'internshipaftersem') {
        var botResponse = '<div class="chat-message bot-message"> <div class="container table-responsive py-5 text-center">' +
            '<table class="table table-bordered table-hover">' +
            '<h3 class="mb-4 text-decoration-underline">INTERNSHIP PATHWAY</h3>' +
            '<thead>' +
            '<tr class="text-center">' +
            '<th scope="col">SI NO</th>' +
            '<th scope="col">Course Category</th>' +
            '<th scope="col">Course Code</th>' +
            '<th scope="col">Course Name</th>' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '<tr class="text-start">' +
            '<th>1</th>' +
            '<th>Humanities & Social Sciences</th>' +
            '<th>6001</th>' +
            '<th>Entrepreneurship and Startup</th>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<th>2</th>' +
            '<th>Common Courses</th>' +
            '<th>6002</th>' +
            '<th>Indian Constitution</th>' +
            '</tr>' +
            '<tr class="text-start">' +
            '<th>3</th>' +
            '<th>Internship</th>' +
            '<th>6007</th>' +
            '<th>Internship</th>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div></div>';
        chatMessages.innerHTML += botResponse;
    }else {
        fetchDuckDuckGoResults(userInput)
            .then(results => {
                var formattedResponse = formatSearchResults(results);
                var botResponse = '<div class="chat-message bot-message">' +
                    '<img src="./public/images/bot.jpeg" alt="Bot" class="bot-image">' +
                    '<div class="search-results">' + formattedResponse + '</div>' +
                    '</div>';
                chatMessages.innerHTML += botResponse;
                chatMessages.scrollTop = chatMessages.scrollHeight;
            })
            .catch(error => {
                console.error('Error fetching search results:', error);
            });
    }
    document.getElementById("user-input").value = "";
}



function fetchDuckDuckGoResults(query) {
    var apiUrl = 'https://api.duckduckgo.com/?q=' + encodeURIComponent(query) + '&format=json';

    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (!data) {
                throw new Error('Invalid response format');
            }
            return data.RelatedTopics || [];
        });
}

function formatSearchResults(results) {
    var formattedResults = '';
    results.forEach(result => {
        if (result.Text && result.FirstURL) {
            formattedResults += '<p><a href="' + result.FirstURL + '" target="_blank">' + result.Text + '</a></p>';
        }
    });
    return formattedResults || '<p>No results found</p>';
}
function clearChat() {
    var chatMessages = document.querySelector(".chat-body");
    chatMessages.innerHTML = '<div class="chat-message bot-message">' +
        '<img src="./public/images/bot.jpeg" alt="Bot" class="bot-image">' +
        '<div class="search-results">How can I help you?</div>' +
        '</div>';
}
document.getElementById("user-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});