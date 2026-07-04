async function generate() {
  const topic = document.getElementById("topic").value;

  if (!topic) {
    alert("Enter a topic!");
    return;
  }

  document.getElementById("output").innerText = "Thinking... 🤖";

  setTimeout(() => {

    const paragraphs = [
      `${topic} is an important concept that affects many areas of our daily life. It is not just a simple idea, but something that has real-world importance and applications.`,

      `When we study ${topic}, we can understand how it works and why it is important in modern society. It helps people improve knowledge and develop new skills.`,

      `In today’s world, ${topic} is widely used in different fields such as education, technology, business, and communication. Its impact continues to grow every day.`,

      `Overall, ${topic} plays a key role in shaping the future. Learning about it gives us better clarity and helps us make smarter decisions.`
    ];

    const shuffled = paragraphs.sort(() => 0.5 - Math.random());

    document.getElementById("output").innerText = shuffled.join("\n\n");

  }, 1500);
}