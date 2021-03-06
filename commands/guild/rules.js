module.exports.run = async function (client, message, args) {
	if (message.guild.id === "618837514882514944") {
		let update = client.config.update;
		let embed = {
			"title": "กฏระเบียบของเซิร์ฟเวอร์นี้",
			"color": 6179554,
			"timestamp": update,
			"footer": {
				"icon_url": "https://hotemoji.com/images/emoji/t/1utnwrapq218t.png",
				"text": "อัพเดทเมื่อ"
			},
			"thumbnail": {
				"url": "https://cdn.discordapp.com/emojis/693345267960774677.png"
			},
			"fields": [
				{
					"name": "**กฏระเบียบข้อที่ 1**",
					"value": "ข้อความจะถูกส่งในช่องทางที่เหมาะสม ข้อความอาจถูกลบโดยไม่ต้องแจ้งให้ทราบหากข้อความนั้นไม่ถูกที่"
				},
				{
					"name": "**กฏระเบียบข้อที่ 2**",
					"value": "อย่าสแปมหรือทำให้การแชทเป็นไปด้วยข้อความแตกแยก ตัวอักษรคำ รูปภาพหรืออีโมติคอนแตกแยก ระวังจะโดนลบ ถ้าไม่จำเป็นจริงๆ"
				},
				{
					"name": "**กฏระเบียบข้อที่ 3**",
					"value": "ข้อความในลักษณะที่ไม่เคารพต่อกัน ไม่อนุญาตให้ใช้การเผาการล่วงละเมิดและการล่วงละเมิด ซึ่งรวมถึงข้อความที่ ข่มขู่ ลามกอนาจาร ใส่ร้าย ดูหมิ่น ประมาทหรือเชื้อชาติศาสนา การเมืองหรือทางเพศที่น่ารังเกียจ"
				},
				{
					"name": "**กฏระเบียบข้อที่ 4**",
					"value": "การโพสต์ลิงก์อนาจารหรือภาพที่น่ารังเกียจอย่างรุนแรงแก่พื้นที่สาธารณะจะไม่สามารถยอมรับได้ ซึ่งรวมถึงโพสต์ประเภทอื่นๆ เลือด, ภาพช็อต, ลิงก์ไปยังเว็บไซต์ Hentai และอื่นๆ อย่าข้ามตัวกรองคำโดยเฉพาะอย่างยิ่งสำหรับความตั้งใจนี้เรามีความอดทนต่อข้อความและรูปภาพที่แสดงถึงการกระทำที่ไม่เหมาะสมทางเพศกับตัวละครที่อายุต่ำกว่าเกณฑ์รูปภาพและโพสต์ โพสต์ที่แสดงสิ่งต่างๆ จะส่งผลให้มีการแบนทันที"
				},
				{
					"name": "**กฏระเบียบข้อที่ 5**",
					"value": "อย่าทำหน้าที่เป็น **ผู้ดูแลด้านหลัง** เราแยกแยะได้ง่าย หากมีปัญหาเกิดขึ้นกรุณาติดต่อทีมของเรา"
				},
				{
					"name": "**กฏระเบียบข้อที่ 6**",
					"value": "เคารพลิขสิทธิ์ของผู้ใช้และวัสดุอื่นๆ และให้เครดิตเมื่อจำเป็น"
				},
				{
					"name": "**กฏระเบียบข้อที่ 7**",
					"value": "ห้ามคัดลอกหรือดาวน์โหลดภาพ อีโมจี ไอดี บอท ไปใช้งานโดยไม่ได้รับอนุญาต ซึ่งจะทำให้คุณถูกแบนทันที"
				},
				{
					"name": "📄 **คำสุดท้ายจาก Shinozaki:**",
					"value": "โปรดใช้สามัญสำนึกพร้อมกับกฎเหล่านี้เนื่องจากรายการนี้ไม่ละเอียดถี่ถ้วน แม้ว่ากฎจะไม่ได้ระบุไว้อย่างชัดเจน ทีมมีการพูดครั้งสุดท้าย การอ้างว่าไม่รู้อะไรเป็นส่วนหนึ่งของกฎไม่มีข้อแก้ตัวสำหรับพฤติกรรมที่ไม่ดี นอกจากนี้อย่าลืมอ่านคำอธิบายช่องและข้อความที่ถูกตรึงในช่องที่คุณอยู่ช่องบางช่องมีแนวทางเฉพาะของตนเองในการปฏิบัติตาม"
				}
			]
		};
		message.channel.send({ embed });

		let myGuild = client.guilds.cache.find(servers => servers.id === "618837514882514944");
		let guildChannel = myGuild.channels.cache.find(channels => channels.id === "692297482062790706");
		guildChannel.messages.fetch("712405302258958356")
		.then(message => message.edit({ embed }));
	} else {
		message.channel.send("🚫 ขออภัยย...คำสั่งนี้ใช้งานได้เฉพาะเซิร์ฟเวอร์ผู้สร้างเท่านั้นนะคะ");
	}
};

module.exports.help = {
	"name": "rules",
	"description": "See information about rules.",
	"usage": "Yrules",
	"category": "guild",
	"aliases": ["กฏ"]
};