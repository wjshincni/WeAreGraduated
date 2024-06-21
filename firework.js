		var clickAbility = true;
            function looptext(){
                const stuName = document.getElementById('stuName');
                const teaName = document.getElementById('teaName');
                const Content = document.getElementById('content');
                const stuNames = ['所有学生',
                    '一个匿名的学生',       //1
                    '唐浩楠',              //2
                    '一个匿名的学生',       //3
                    '一个匿名的学生',       //4
                    '一个匿名的学生',       //5
                    '一个匿名的学生',       //6
                    '一个匿名的学生',       //7
                    '一个匿名的学生',       //8
                    '一个匿名的学生',       //9
                    '一个匿名的学生',       //10
                    '一个匿名的学生',       //11
                    '一个匿名的学生',       //12
                    '一个匿名的学生',       //13
                    '一个匿名的学生',       //14
                    '一个匿名的学生',       //15
                    '一个匿名的学生',       //16
                    '一个匿名的学生',       //17
                    '一个匿名的学生',       //18
                    '一个匿名的学生',       //19
                    '一个匿名的学生',       //20
                    '笑↗笑↘',            //21
                    '笑↗笑↘',            //22
                    '笑↗笑↘',            //23
                    '笑↗笑↘',            //24
                    '笑↗笑↘',            //25
                    '笑↗笑↘',            //26
                    '笑↗笑↘',            //27
                    '唐斯雨',              //28
                    '一个匿名的学生',       //29
                    '黄筱娇'];             //30
            
                const teaNames = ['所有老师',
                    '所有老师',            //1
                    '物理老师',            //2
                    '英语老师',            //3
                    '赵',                 //4
                    '你猜',               //5
                    '所有老师',            //6
                    '数学傅老师',          //7
                    '历史朱老师',          //8
                    '物理老师',            //9
                    '化学老师',            //10
                    '英语老师',            //11
                    '赵老师',              //12
                    '赵老师',              //13
                    '数学傅老师',          //14
                    '物理老师',            //15
                    '化学老师',            //16
                    '历史朱老师',          //17
                    '所有老师',            //18
                    '赵老师',              //19
                    '朱老师',              //20
                    '体育老师',            //21
                    '英语老师',            //22
                    '化学老师',            //23
                    '数学傅老师',          //24
                    '物理老师',            //25
                    '语文老师',            //26
                    '数学孙老师',          //27
                    '小黑',               //28
                    '所有老师',           //29
                    '所有老师']           //30
            
                const contents = ['你们幸苦了',
                    '希望老师们可以天天开心 身体健康，万事如意',
                    '这里是唐天笑，唐浩楠没有填，所以我不知道他想说啥，大概也是表达对你的喜爱',
                    '这里是唐天笑，这个匿名的学生没有填，所以我不知道他想说啥，默认他表达了对你的赞美喜爱之情',
                    '这里是唐天笑，这个人填调查问卷就是乱填的，大概是表达对你的赞美喜爱之情',
                    '这里是唐天笑，她没填，但是根据IP地址，我比对出来这是个好学生，那就是表达了对你的敬佩热爱感恩之情',
                    '接下一届的时候就会知道我们这一届的好了哈哈，祝老师们顺利!开心!',
                    '你是我最最最喜欢的一个数学老师祝你退休快乐 爱你！',
                    '你是我最最最喜欢的一个历史老师 得亏有你我的历史才能提高十几分 爱你!',
                    '诸事顺利',
                    '我真感觉你长的真的好可爱哈哈哈哈哈',
                    '祝你越来越漂亮爱你',
                    '祝你能在下一届遇见另一个唐思雨',
                    '感谢四年以来你对我的教育，希望在教师这个行业你能越干越起劲。',
                    '虽然你只教我一年但是也很感激你在这一年里对我的关照。',
                    '你性格很好，对我不会的知识你会耐心教我并且会换法子教我，对同学们也是很亲切希望身体健康手快快好起来！',
                    '你很会开玩笑，穿搭很有年轻范儿~',
                    '感谢你对我的教育，在我紧张忐忑的点开分数查询的时候满意的分数让我知道我没辜负你对我的教育。',
                    '感谢各位老师们！',
                    '谢谢你',
                    '谢谢你',
                    '你跟别的体育老师不一样，上课不是练习就是活动，不讲一句屁话，造就了我四年以来的洒脱',
                    '你没少骂我，也没少夸我，有着独特的性格和女强人的姿态，我在你身上学到的早就不只是英语了',
                    '我没少在你课上捣乱，所以我希望中考化学分数能比我捣乱的次数多',
                    '你哪是老太，谁说你是老太？你是我老大',
                    '你两年来只发了一次火，但是发了好多吃的',
                    '现在我说的，就是一句默写，每个学生的每一句发言都是默写，尤其是我说的，我要让你将来的学生默上我的名言！哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈！（内向的笑）',
                    '以后没有我这个大师在了',
                    '这里是唐天笑，唐斯雨不好好填，必须绞了！',
                    '每个老师都很好',
                    '每个老师都很好']
            
                console.log(stuNames.length,teaNames.length,contents.length); //检查留言数
            
                window.onload = change('所有学生','所有老师','你们幸苦了');
            
                function getStu(){
                    stuName.innerHTML = '';
                    teaName.innerHTML = '';
                    Content.innerHTML = '';
                    const Int = randomStu();
                    change(stuNames[Int],teaNames[Int],contents[Int]);
                    stuName.innerHTML = '';
                    teaName.innerHTML = '';
                    Content.innerHTML = '';
                }
            
                function change(stuN,teaN,content){
                    stuName.innerHTML = '';
                    teaName.innerHTML = '';
                    Content.innerHTML = '';
            
                    var intervalStuN,
                        intervalTeaN,
                        intervalContent;
                    let charIndexStuN = 0,
                        charIndexTeaN = 0,
                        charIndexContent = 0;
            
                    console.log(stuN,teaN,content);
            
                    // 定时函数，逐渐显示文本
                    function revealstuN() {
                    // 如果还有字符未显示
                        if (charIndexStuN < stuN.length) {
                        // 在容器中添加当前字符并更新索引
                            stuName.innerHTML += stuN[charIndexStuN++];
                        } else {
                        // 所有字符都已显示，停止定时器
                            clearInterval(intervalStuN);
                            setTimeout(function(){
                                intervalTeaN = setInterval(revealTeaN, 200);
                            },500)
                            
                        }
                    }
                            // 设置间隔为500毫秒，并开始显示文本
                    intervalStuN = setInterval(revealstuN, 300);
            
                    // 定时函数，逐渐显示文本
                    function revealTeaN() {
                    // 如果还有字符未显示
                        if (charIndexTeaN < teaN.length) {
                        // 在容器中添加当前字符并更新索引    
                            teaName.innerHTML += teaN[charIndexTeaN++];
                        } else {
                        // 所有字符都已显示，停止定时器
                            clearInterval(intervalTeaN);
                            setTimeout(function(){
                                intervalStuN = setInterval(revealContent, 50);
                            },500)
                        }
                    }
                    
            
                    // 定时函数，逐渐显示文本
                    function revealContent() {
                    // 如果还有字符未显示
                        if (charIndexContent < content.length) {
                        // 在容器中添加当前字符并更新索引
                            Content.innerHTML += content[charIndexContent++];
                        } else {
                        // 所有字符都已显示，停止定时器
                            clearInterval(intervalContent);
                        }
                    }
                }
                
                setInterval(getStu,20000);
            
                function randomStu(){
                    const min = 1; 
                    const max = 30;//留言数
                    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
                    return randomInt;
                }
            }
            looptext();

		// 烟花特效
        (function () {
			var btn = document.getElementById('hideBtn');
			var msg = document.getElementById('settings');
			setInterval(function(){//隐藏框
				if(btn.checked){
					msg.style.display = "block";
					clickAbility = true;
				}
				else{
					msg.style.display = "none";
					clickAbility = false;
				}
			},1000)
            var canvas = document.getElementById('fireworks'),
                ctx = canvas.getContext('2d'),
                settings,
                fireworks = [],
                particles = [],
                hue = 10,
                limiterTotal = 1,
                limiterTick = 0,
                timerTotal = 300,
                timerTick = 0,
                mousedown = false,
                particle,
                size,
                P,
                S,
                mx,
                my;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            function random(min, max) {
                return Math.random() * (max - min) + min;
            }
            function calculateDistance(p1x, p1y, p2x, p2y) {
                var xDistance = p1x - p2x,
                    yDistance = p1y - p2y;
                return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 1));
            }
            function Firework(sx, sy, tx, ty) {
                this.x = sx;
                this.y = sy;
                this.sx = sx;
                this.sy = sy;
                this.tx = tx;
                this.ty = ty;
                this.distanceToTarget = calculateDistance(sx, sy, tx, ty);
                this.distanceTraveled = 0;
                this.coordinates = [];
                this.coordinateCount = 3;
                while (this.coordinateCount--) {
                    this.coordinates.push([this.x, this.y]);
                }
                this.angle = Math.atan2(ty - sy, tx - sx);
                this.speed = 0.2;
                this.acceleration = 1.05;
                this.brightness = random(50, 70);
                this.targetRadius = 1;
            }
            Firework.prototype.update = function (index) {
                this.coordinates.pop();
                this.coordinates.unshift([this.x, this.y]);
                if (this.targetRadius < 8) {
                    this.targetRadius += 0.1;
                } else {
                    this.targetRadius = 1;
                }
                this.speed *= this.acceleration;
                var vx = Math.cos(this.angle) * this.speed,
                    vy = Math.sin(this.angle) * this.speed;
                this.distanceTraveled = calculateDistance(this.sx, this.sy, this.x + vx, this.y + vy);
                if (this.distanceTraveled >= this.distanceToTarget) {
                    createParticles(this.tx, this.ty);
                    fireworks.splice(index, 1);
                } else {
                    this.x += vx;
                    this.y += vy;
                }
            }
            Firework.prototype.draw = function () {
                ctx.beginPath();
                ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
                ctx.lineTo(this.x, this.y);
                ctx.strokeStyle = 'hsl(' + hue + ', 100%, ' + this.brightness + '%)';
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(this.tx, this.ty, this.targetRadius, 0, Math.PI * 2);
                ctx.stroke();
            }
            function createParticles(x, y) {
                var particleCount = P;
                while (particleCount--) {
                    particles.push(new Particle(x, y));
                }
            }
            function Particle(x, y) {
                this.x = x;
                this.y = y;
                this.coordinates = [];
                this.coordinateCount = 10;
                while (this.coordinateCount--) {
                    this.coordinates.push([this.x, this.y]);
                }
                this.angle = random(0, Math.PI * 2);
                this.speed = random(1,S);
                this.friction = 0.95;
                this.gravity = 1;
                this.hue = random(hue - 20, hue + 20);
                this.brightness = random(50, 80);
                this.alpha = 1;
                this.decay = random(0.015, 0.03);
            }
            Particle.prototype.update = function (index) {
                this.coordinates.pop();
                this.coordinates.unshift([this.x, this.y]);
                this.speed *= this.friction;
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed + this.gravity;
                this.alpha -= this.decay;
                if (this.alpha <= this.decay) {
                    particles.splice(index, 1);
                }
            }
            Particle.prototype.draw = function () {
                ctx.beginPath();
                ctx.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
                ctx.lineTo(this.x, this.y);
                ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';
                ctx.stroke();
            }
			
            function loop() {
                settings = document.getElementById('settings');
                particle = document.getElementById('particle');
                size = document.getElementById('size');
                P = particle.value;
                S = size.value;
                hue = random(1,2048);
                ctx.globalCompositeOperation = 'destination-out';
                ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.globalCompositeOperation = 'lighter';
                var i = fireworks.length;
                while (i--) {
                    fireworks[i].draw();
                    fireworks[i].update(i);
                }
                var i = particles.length;
                while (i--) {
                    particles[i].draw();
                    particles[i].update(i);
                }
                if (timerTick >= timerTotal) {
                    if (!mousedown) {
                        fireworks.push(new Firework(canvas.width / 2, canvas.height, random(0, canvas.width), random(0, canvas.height / 2)));
                        timerTick = 0;
						if(clickAbility){
							settings.style.display = 'block';
						}
					}
                } else {
                    timerTick+=20;
                }
                if (limiterTick >= limiterTotal) {
                    if (mousedown) {
						if(clickAbility){
							fireworks.push(new Firework(canvas.width / 2, canvas.height, mx, my));
							settings.style.display = 'none';
						}
                        limiterTick = 0;
                        
                    }
                } else {
                    limiterTick++;
                }
                requestAnimationFrame(loop);
            }
            window.onload = function () {
                canvas.addEventListener('touchstart', function (e) {
                    e.preventDefault();
                    mx = e.targetTouches[0].pageX;
                    my = e.targetTouches[0].pageY;
                    mousedown = true;
                });
                canvas.addEventListener('touchmove', function(e){
                    mx = e.targetTouches[0].pageX;
                    my = e.targetTouches[0].pageY;
                });
                canvas.addEventListener('touchend', function (e){
                    e.preventDefault();
                    mousedown = false;
                });
                canvas.addEventListener('mousemove', function (e) {
                    mx = e.pageX - canvas.offsetLeft;
                    my = e.pageY - canvas.offsetTop;
                });
                canvas.addEventListener('mousedown', function (e) {
                    e.preventDefault();
                    mousedown = true;
                });
                canvas.addEventListener('mouseup', function (e) {
                    e.preventDefault();
                    mousedown = false;
                });
                loop();
            };
        })();