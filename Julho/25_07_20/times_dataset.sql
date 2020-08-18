CREATE TABLE times(
   Year       INTEGER  NOT NULL
  ,Honor      VARCHAR(25) NOT NULL
  ,Name       VARCHAR(40) NOT NULL
  ,Country    VARCHAR(14)
  ,Birth_Year INTEGER 
  ,Death_Year INTEGER 
  ,Title      VARCHAR(70)
  ,Category   VARCHAR(12)
  ,Context    VARCHAR(52)
);
INSERT INTO times(Year,Honor,Name,Country,Birth_Year,Death_Year,Title,Category,Context) VALUES
 (1927,'Man of the Year','Charles Lindbergh','United States',1902,1974,'US Air Mail Pilot',NULL,'First Solo Transatlantic Flight')
,(1928,'Man of the Year','Walter Chrysler','United States',1875,1940,'Founder of Chrysler','Economics','Chrysler/Dodge Merger')
,(1929,'Man of the Year','Owen D. Young','United States',1874,1962,'Member of the German Reparations International Commission','Diplomacy','Young Plan')
,(1930,'Man of the Year','Mahatma Gandhi','India',1869,1948,NULL,'Revolution','Salt March')
,(1931,'Man of the Year','Pierre Laval','France',1883,1945,'Prime Minister of France','Politics',NULL)
,(1932,'Man of the Year','Franklin D. Roosevelt','United States',1882,1945,'President of the United States','Politics','Presidential Election')
,(1933,'Man of the Year','Hugh S. Johnson','United States',1882,1942,'Director of the National Recovery Administration','Politics','New Deal')
,(1934,'Man of the Year','Franklin D. Roosevelt','United States',1882,1945,'President of the United States','Politics',NULL)
,(1935,'Man of the Year','Haile Selassie','Ethiopia',1892,1975,'Emperor of Ethiopia','War','Colonial War')
,(1936,'Woman of the Year','Wallis Simpson','United States',1896,1986,'Duchess of Windsor','Politics','Edward VIII Abdication Crisis')
,(1937,'Man and Wife of the Year','Chiang Kai-shek','China',1887,1975,'Premier of the Republic of China','War','World War II')
,(1937,'Man and Wife of the Year','Soong Mei-ling','China',1898,2003,'First Lady of the Republic of China','War','World War II')
,(1938,'Man of the Year','Adolf Hitler','Germany',1889,1945,'Chancellor of Germany','War','World War II')
,(1939,'Man of the Year','Joseph Stalin','Soviet Union',1878,1953,'General Secretary of the Communist Party of the Soviet Union','War','World War II')
,(1940,'Man of the Year','Winston Churchill','United Kingdom',1874,1965,'Prime Minister of the United Kingdom','War','Battle of Britain, World War II')
,(1941,'Man of the Year','Franklin D. Roosevelt','United States',1882,1945,'President of the United States','War','Pearl Harbor Attack, World War II')
,(1942,'Man of the Year','Joseph Stalin','Soviet Union',1878,1953,'Premier of the Soviet Union','War','Battle of Stalingrad, World War II')
,(1943,'Man of the Year','George Marshall','United States',1880,1959,'Army Chief of Staff','War','World War II')
,(1944,'Man of the Year','Dwight D. Eisenhower','United States',1890,1969,'Supreme Allied Commander in Europe','War','Battle of Normandy, World War II')
,(1945,'Man of the Year','Harry S. Truman','United States',1884,1972,'President of the United States','War','Bombing of Hiroshima/Nagasaki, World War II')
,(1946,'Man of the Year','James F. Byrnes','United States',1879,1972,'Secretary of State','Diplomacy','Iran Crisis')
,(1947,'Man of the Year','George Marshall','United States',1880,1959,'Secretary of State','Diplomacy','Marshall Plan')
,(1948,'Man of the Year','Harry S. Truman','United States',1884,1972,'President of the United States','Politics','Presidential Election')
,(1949,'Man of the Half-Century','Winston Churchill','United Kingdom',1874,1965,'Prime Minister of the United Kingdom','War','World War II')
,(1950,'Man of the Year','The American Soldier','United States',NULL,NULL,NULL,'War','Korean War')
,(1951,'Man of the Year','Mohammad Mossadegh','Iran',1882,1967,'Prime Minister of Iran','Economics','Abadan Crisis')
,(1952,'Woman of the Year','Elizabeth II','United Kingdom',1926,NULL,'Queen of England','Politics','Royal Coronation')
,(1953,'Man of the Year','Konrad Adenauer','West Germany',1876,1967,'Chancellor of West Germany','Politics',NULL)
,(1954,'Man of the Year','John Foster Dulles','United States',1888,1959,'Secretary of State','War','Manila Pact, Cold War')
,(1955,'Man of the Year','Harlow Curtice','United States',1893,1962,'President of General Motors (GM)','Economics',NULL)
,(1956,'Man of the Year','The Hungarian Freedom Fighter','Hungary',NULL,NULL,NULL,'Revolution','Hungarian Revolution')
,(1957,'Man of the Year','Nikita Khrushchev','Soviet Union',1894,1971,'General Secretary of the Communist Party of the Soviet Union','Space','Sputnik 1')
,(1958,'Man of the Year','Charles de Gaulle','France',1890,1970,'President of France','Politics','Fifth Republic')
,(1959,'Man of the Year','Dwight D. Eisenhower','United States',1890,1969,'President of the United States','Politics',NULL)
,(1960,'Men of the Year','American Scientists','United States',NULL,NULL,NULL,'Science',NULL)
,(1961,'Man of the Year','John F. Kennedy','United States',1917,1963,'President of the United States','Politics','Presidential Election')
,(1962,'Man of the Year','Pope John XXIII','Vatican City',1881,1963,'Pope of the Roman Catholic Church','Religion','Vatican Council')
,(1963,'Man of the Year','Martin Luther King Jr.','United States',1929,1968,'President of the Southern Christian Leadership Conference','Politics','March on Washington')
,(1964,'Man of the Year','Lyndon B. Johnson','United States',1908,1973,'President of the United States','Politics','Presidential Election')
,(1965,'Man of the Year','William Westmoreland','United States',1914,2005,'Army General','War','Vietnam War')
,(1966,'Man of the Year','The Inheritor','United States',NULL,NULL,NULL,'Politics','Baby Boom Generation')
,(1967,'Man of the Year','Lyndon B. Johnson','United States',1908,1973,'President of the United States','Politics',NULL)
,(1968,'Men of the Year','The Apollo 8 Astronauts (William Anders)','United States',1933,NULL,'NASA Astronaut','Space','Apollo 8')
,(1968,'Men of the Year','The Apollo 8 Astronauts (Frank Borman)','United States',1928,NULL,'NASA Astronaut','Space','Apollo 8')
,(1968,'Men of the Year','The Apollo 8 Astronauts (Jim Lovell)','United States',1928,NULL,'NASA Astronaut','Space','Apollo 8')
,(1969,'Man and Woman of the Year','The Middle Americans','United States',NULL,NULL,NULL,'Politics',NULL)
,(1970,'Man of the Year','Willy Brandt','West Germany',1913,1992,'Chancellor of West Germany','Politics',NULL)
,(1971,'Man of the Year','Richard Nixon','United States',1913,1994,'President of the United States','Politics',NULL)
,(1972,'Men of the Year','Richard Nixon','United States',1913,1994,'President of the United States','Politics','Presidential Election')
,(1972,'Men of the Year','Henry Kissinger','United States',NULL,NULL,'National Security Advisor','Diplomacy','United States/China')
,(1973,'Man of the Year','John Sirica','United States',1904,1992,'Chief Judge of the United States District Court (District of Columbia)','Politics','Presidential Impeachment')
,(1974,'Man of the Year','King Faisal','Saudi Arabia',1906,1975,'King of Saudi Arabia','Economics','Oil Crisis')
,(1975,'Women of the Year','American Women','United States',NULL,NULL,NULL,'Politics','Feminist Movement')
,(1976,'Man of the Year','Jimmy Carter','United States',1924,NULL,'President of the United States','Politics','Presidential Election')
,(1977,'Man of the Year','Anwar Sadat','Egypt',1918,1981,'President of Egypt','Diplomacy','Egypt/Israel')
,(1978,'Man of the Year','Deng Xiaoping','China',1904,1997,'Paramount Leader of the People’s Republic of China','Politics',NULL)
,(1979,'Man of the Year','Ayatollah Khomeini','Iran',1902,1989,'Supreme Leader of Iran','Revolution','Iranian Revolution')
,(1980,'Man of the Year','Ronald Reagan','United States',1911,2004,'President of the United States','Politics','Presidential Election')
,(1981,'Man of the Year','Lech Wałęsa','Poland',1943,NULL,'Chairperson of Solidarity (Polish Trade Union)','Politics','Gdańsk Agreement')
,(1982,'Machine of the Year','The Computer',NULL,NULL,NULL,NULL,'Technology',NULL)
,(1983,'Men of the Year','Ronald Reagan','United States',1911,2004,'President of the United States','War','Strategic Defense Initiative, Cold War')
,(1983,'Men of the Year','Yuri Andropov','Soviet Union',1914,1984,'General Secretary of the Communist Party of the Soviet Union','War','Strategic Defense Initiative, Cold War')
,(1984,'Man of the Year','Peter Ueberroth','United States',1937,NULL,'President of the 1984 Summer Olympic Games Organizing Committee','Politics','Olympic Games')
,(1985,'Man of the Year','Deng Xiaoping','China',1904,1997,'Paramount Leader of the People’s Republic of China','Politics','Economic Reforms')
,(1986,'Woman of the Year','Corazon Aquino','Philippines',1933,2009,'President of the Philippines','Revolution','Philippine Revolution')
,(1987,'Man of the Year','Mikhail Gorbachev','Soviet Union',1931,NULL,'General Secretary of the Communist Party of the Soviet Union','Politics','Political Reforms')
,(1988,'Planet of the Year','The Endangered Earth',NULL,NULL,NULL,NULL,'Environment',NULL)
,(1989,'Man of the Decade','Mikhail Gorbachev','Soviet Union',1931,NULL,'President of the Soviet Union','Politics','Democratic Elections')
,(1990,'Man of the Year','George H. W. Bush','United States',1924,NULL,'President of the United States','War','Gulf War')
,(1991,'Man of the Year','Ted Turner','United States',1938,NULL,'Founder of CNN','Media',NULL)
,(1992,'Man of the Year','Bill Clinton','United States',1946,NULL,'President of the United States','Politics','Presidential Election')
,(1993,'Men of the Year','The Peacemakers (Yitzhak Rabin)','Israel',1922,1995,'Prime Minister of Israel','Diplomacy','Oslo Accord')
,(1993,'Men of the Year','The Peacemakers (Yasser Arafat)','Palestine',1929,2004,'President of the Palestinian National Authority','Diplomacy','Oslo Accord')
,(1993,'Men of the Year','The Peacemakers (F. W. de Klerk)','South Africa',1936,NULL,'State President of South Africa','Politics','End of Apartheid')
,(1993,'Men of the Year','The Peacemakers (Nelson Mandela)','South Africa',1918,2013,'President of South Africa','Politics','End of Apartheid')
,(1994,'Man of the Year','Pope John Paul II','Vatican City',1920,2005,'Pope of the Roman Catholic Church','Religion',NULL)
,(1995,'Man of the Year','Newt Gingrich','United States',1943,NULL,'Speaker of the House','Politics','Congressional Elections')
,(1996,'Man of the Year','David Ho','United States',1952,NULL,'Director of AIDS Research Center','Science','AIDS Research')
,(1997,'Man of the Year','Andrew Grove','United States',1936,2016,'CEO of Intel','Technology',NULL)
,(1998,'Men of the Year','Bill Clinton','United States',1946,NULL,'President of the United States','Politics','Presidential Impeachment')
,(1998,'Men of the Year','Ken Starr','United States',1946,NULL,'Office of the Independent Counsel','Politics','Presidential Impeachment')
,(1999,'Person of the Year','Jeff Bezos','United States',1964,NULL,'Founder and CEO of Amazon','Technology',NULL)
,(1999,'Person of the Century','Albert Einstein','United States',NULL,NULL,NULL,'Science',NULL)
,(2000,'Person of the Year','George W. Bush','United States',1946,NULL,'President of the United States','Politics','Presidential Election')
,(2001,'Person of the Year','Rudy Giuliani','United States',1944,NULL,'Mayor of New York City','War','9/11 Terrorist Attacks')
,(2002,'Persons of the Year','The Whistleblowers (Cynthia Cooper)','United States',NULL,NULL,'Vice President of Internal Audit at WorldCom','Economics','Corporate Fraud')
,(2002,'Persons of the Year','The Whistleblowers (Coleen Rowley)','United States',1954,NULL,'FBI Special Agent','Politics','9/11 Terrorist Attacks')
,(2002,'Persons of the Year','The Whistleblowers (Sherron Watkins)','United States',1959,NULL,'Vice President of Corporate Development at Enron','Economics','Corporate Fraud')
,(2003,'Person of the Year','The American Soldier','United States',NULL,NULL,NULL,'War','Iraq War')
,(2004,'Person of the Year','George W. Bush','United States',1946,NULL,'President of the United States','Politics','Presidential Election')
,(2005,'Persons of the Year','The Good Samaritans (Bono)','Ireland',1960,NULL,'Lead Singer of U2','Philanthropy','Charity Concerts')
,(2005,'Persons of the Year','The Good Samaritans (Bill Gates)','United States',1955,NULL,'Founder of Bill & Melinda Gates Foundation','Philanthropy',NULL)
,(2005,'Persons of the Year','The Good Samaritans (Melinda Gates)','United States',1964,NULL,'Founder of Bill & Melinda Gates Foundation','Philanthropy',NULL)
,(2006,'Person of the Year','You',NULL,NULL,NULL,NULL,'Technology','World Wide Web')
,(2007,'Person of the Year','Vladimir Putin','Russia',1952,NULL,'President of the Russian Federation','Politics',NULL)
,(2008,'Person of the Year','Barack Obama','United States',1961,NULL,'President of the United States','Politics','Presidential Election')
,(2009,'Person of the Year','Ben Bernanke','United States',1953,NULL,'Chairman of the Federal Reserve','Economics','Financial Crisis')
,(2010,'Person of the Year','Mark Zuckerberg','United States',1984,NULL,'Founder and CEO of Facebook','Technology',NULL)
,(2011,'Person of the Year','The Protester',NULL,NULL,NULL,NULL,'Revolution','Arab Spring')
,(2012,'Person of the Year','Barack Obama','United States',1961,NULL,'President of the United States','Politics','Presidential Election')
,(2013,'Person of the Year','Pope Francis','Vatican City',1936,NULL,'Pope of the Roman Catholic Church','Religion','Papal Conclave')
,(2014,'Person of the Year','The Ebola Fighters',NULL,NULL,NULL,NULL,'Science','Ebola Epidemic')
,(2015,'Person of the Year','Angela Merkel','Germany',1954,NULL,'Chancellor of Germany','Politics','Debt Crisis; Refugee Crisis; Paris Terrorist Attacks')
,(2016,'Person of the Year','Donald Trump','United States',1946,NULL,'President of the United States','Politics','Presidential Election');
