document.addEventListener('DOMContentLoaded', function () {
    // Update copyright year
    document.getElementById('copyrightYear').innerText = new Date().getFullYear();

    // Load news articles
    const articlesSection = document.getElementById('articles');
    const articles = [
        {
            title: "Pandemic Parent Survey Finds Perverse Pattern: Students Are More Likely to Be Attending School in Person Where Covid Is Spreading More Rapidly",
            content: "Majority of students receiving fully remote instruction; Private-school students more likely to be in person full time. By Michael B. Henderson, Paul E. Peterson, and Martin R. West"
        },
        {
            title: "Critical Race Theory Collides with the Law",
            content: "Can a school require students to “confess their privilege” in class? By Joshua Dunn"
        },
        {
            title: "Teaching about Slavery",
            content: "“Asking how to teach about slavery is a little like asking why we teach at all” By Danielle Allen, Daina Ramey Berry, David W. Blight, Allen C. Guelzo, Robert Maranto, Ian V. Rowe, and Adrienne Stang"
        },
        {
            title: "Ethnic Studies in California",
            content: "An unsteady jump from college campuses to K-12 classrooms. By Miriam Pawel"
        },
        {
            title: "Segregation and Racial Gaps in Special Education",
            content: "New evidence on the debate over disproportionality. By Todd E. Elder, David Figlio, Scott Imberman, and Claudia Persico"
        },
        {
            title: "Making Education Research Relevant",
            content: "How researchers can give teachers more choices. By Daniel T. Willingham and David B. Daniel"
        },
        {
            title: "Proving the School-to-Prison Pipeline",
            content: "Stricter middle schools raise the risk of adult arrests. By Andrew Bacher-Hicks, Stephen B. Billings, and David J. Deming"
        },
        {
            title: "What I Learned in 23 Years Ranking America’s Most Challenging High Schools",
            content: "Most students are capable of much more learning than they are asked to do. By Jay Mathews"
        },
        {
            title: "A Test for the Test Makers",
            content: "College Board and ACT move to grow and diversify as the pandemic fuels test-optional admissions trend. By Jon Marcus"
        }
    ];


    articles.forEach((article, index) => {
        const articleDiv = document.createElement('div');
        articleDiv.className = `article-section ${index % 2 === 0 ? 'even' : 'odd'}`;
        articleDiv.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
        articlesSection.appendChild(articleDiv);
    });
});
