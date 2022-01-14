const words = ['abaca', 'abats', 'abcès', 'abîme', 'aboli', 'abord', 'about', 'accès', 'accru', 'accus', 'acéré', 'achat', 'acide', 'acier', 'actes', 'actif', 'adieu', 'admet', 'admis', 'adore', 'adoré', 'affût', 'âgées', 'agent', 'agile', 'agite', 'agité', 'aider', 'aides', 'aidés', 'aient', 'aigle', 'aigre', 'aigri', 'aiguë', 'ailes', 'aille', 'aimée', 'aimer', 'aînée', 'aînés', 'ainsi', 'aires', 'aisée', 'aisés', 'ajout', 'album', 'aléas', 'alêne', 'algue', 'alias', 'alibi', 'alité', 'allée', 'aller', 'allés', 'allez', 'allié', 'aloès', 'alors', 'alpha', 'alpin', 'amant', 'ambon', 'amène', 'amené', 'amère', 'amibe', 'amont', 'amour', 'amphi', 'ample', 'amusé', 'anche', 'ancre', 'anges', 'angle', 'anime', 'animé', 'année', 'anode', 'antan', 'aorte', 'appel', 'appui', 'après', 'aptes', 'arabe', 'arbre', 'arche', 'arène', 'arête', 'argot', 'arias', 'aride', 'armée', 'armer', 'armes', 'armés', 'arôme', 'arrêt', 'asile', 'aspic', 'assez', 'assis', 'astre', 'athée', 'atlas', 'atome', 'atout', 'aucun', 'audit', 'aussi', 'autel', 'autos', 'autre', 'avais', 'avait', 'avant', 'avare', 'avéré', 'aveux', 'avide', 'aviez', 'avion', 'avisé', 'avive', 'avoir', 'avons', 'avoue', 'avoué', 'avril', 'ayant', 'azote', 'azoté', 'bâclé', 'bacon', 'baffe', 'bagne', 'bague', 'bahut', 'bains', 'balai', 'balle', 'balte', 'banal', 'banco', 'bancs', 'bande', 'banjo', 'barbe', 'barbu', 'barde', 'barge', 'baril', 'baron', 'barre', 'basée', 'baser', 'bases', 'basse', 'bâtir', 'bâton', 'battu', 'baume', 'baver', 'bazar', 'beaux', 'bébés', 'bécot', 'beige', 'bêler', 'belle', 'bénin', 'bénir', 'béret', 'berge', 'berne', 'berné', 'bêtes', 'béton', 'bette', 'bévue', 'biais', 'bible', 'bidon', 'biens', 'bière', 'bigle', 'bijou', 'bilan', 'biler', 'bique', 'bison', 'bisou', 'blâme', 'blanc', 'blasé', 'blême', 'bleue', 'bleus', 'blini', 'blocs', 'blond', 'blues', 'bocal', 'boeuf', 'boire', 'boite', 'bombe', 'bondé', 'bonds', 'bongo', 'bonne', 'bonté', 'bonus', 'bordé', 'bords', 'borne', 'borné', 'bosse', 'bossu', 'botte', 'boudé', 'bouée', 'bouge', 'bougé', 'boule', 'bourg', 'bouse', 'bouts', 'bovin', 'boyau', 'brame', 'brave', 'bravo', 'brefs', 'brève', 'bribe', 'bride', 'brise', 'brisé', 'bruit', 'brûlé', 'brume', 'brune', 'brute', 'buire', 'bulbe', 'bulle', 'burin', 'buter', 'butin', 'butor', 'butte', 'câble', 'câblé', 'cabot', 'cabri', 'cacao', 'cache', 'caché', 'cadet', 'cadre', 'caduc', 'cafés', 'caler', 'câlin', 'calme', 'campe', 'camps', 'camus', 'canal', 'canne', 'canon', 'canot', 'capes', 'carat', 'cargo', 'carma', 'carpe', 'carré', 'carte', 'caser', 'cases', 'casse', 'cassé', 'casus', 'catin', 'cause', 'causé', 'caves', 'céder', 'cedex', 'celer', 'celle', 'celui', 'censé', 'cents', 'cerne', 'césar', 'cesse', 'cessé', 'cette', 'chair', 'châle', 'champ', 'chant', 'chaos', 'chars', 'chats', 'chaud', 'chaux', 'chefs', 'chère', 'chéri', 'chers', 'chien', 'chier', 'chocs', 'choir', 'choix', 'chope', 'chose', 'chute', 'chuté', 'cibla', 'cible', 'cieux', 'citée', 'citer', 'cités', 'civil', 'clair', 'clame', 'clamp', 'clans', 'clefs', 'clerc', 'clips', 'clope', 'clore', 'close', 'clown', 'clubs', 'cocon', 'codes', 'coeur', 'cohue', 'coins', 'colin', 'colis', 'colle', 'combe', 'comme', 'comte', 'comté', 'conçu', 'congé', 'conne', 'connu', 'conte', 'copie', 'coque', 'corde', 'corne', 'cornu', 'corps', 'corse', 'cosse', 'cotée', 'côtes', 'côtés', 'coton', 'coude', 'coule', 'coupe', 'coupé', 'coups', 'cours', 'court', 'couru', 'coûte', 'coûté', 'coûts', 'crabe', 'crack', 'craie', 'crâne', 'credo', 'créée', 'créer', 'créés', 'crème', 'crêpe', 'crépi', 'crépu', 'crête', 'creux', 'crevé', 'crier', 'crime', 'crise', 'crois', 'croit', 'croix', 'cruel', 'cuber', 'cubes', 'cuire', 'cuite', 'culot', 'culte', 'cumul', 'curer', 'curie', 'cycle', 'cygne', 'dague', 'dalle', 'damas', 'dames', 'dandy', 'danse', 'datas', 'datée', 'dater', 'dates', 'datif', 'deale', 'débat', 'débit', 'début', 'décès', 'dèche', 'déchu', 'décor', 'décri', 'déçue', 'déçus', 'dédié', 'défis', 'dégât', 'dégel', 'degré', 'délai', 'délié', 'délit', 'delta', 'demie', 'démis', 'démon', 'dense', 'dents', 'dépit', 'dépôt', 'désir', 'dette', 'deuil', 'devez', 'devis', 'dévot', 'devra', 'diane', 'diète', 'dieux', 'digne', 'digue', 'dilué', 'dîner', 'dires', 'disse', 'dites', 'divan', 'divin', 'dogme', 'doigt', 'doive', 'donna', 'donne', 'donné', 'dorer', 'doser', 'doses', 'dotée', 'doter', 'dotés', 'douce', 'doués', 'douma', 'doute', 'douze', 'doyen', 'drame', 'droit', 'drôle', 'dunes', 'duper', 'duras', 'durée', 'durer', 'dures', 'duvet', 'ébahi', 'ébène', 'écale', 'écart', 'échec', 'échos', 'éclat', 'école', 'écran', 'écrié', 'écrit', 'écume', 'édité', 'effet', 'égale', 'égard', 'égaux', 'égide', 'élans', 'élève', 'élevé', 'élimé', 'élire', 'élite', 'elles', 'éloge', 'émail', 'émane', 'émise', 'empan', 'encre', 'enfer', 'enfin', 'enflé', 'engin', 'enjeu', 'ennui', 'entre', 'entré', 'envie', 'envoi', 'envol', 'épais', 'épaté', 'épave', 'épicé', 'épier', 'épine', 'époux', 'épris', 'errer', 'essai', 'essor', 'étage', 'étain', 'étais', 'était', 'étame', 'étang', 'étant', 'étape', 'états', 'étayé', 'étron', 'étude', 'évadé', 'évasé', 'évier', 'évite', 'évité', 'exact', 'excès', 'exclu', 'exige', 'exigé', 'exigu', 'exilé', 'exode', 'extra', 'fable', 'faces', 'fâché', 'façon', 'facto', 'fades', 'fagne', 'fagot', 'faite', 'faîte', 'faits', 'fallu', 'falot', 'faner', 'fange', 'farce', 'fasse', 'faste', 'fatal', 'fatum', 'faune', 'faute', 'fauve', 'feint', 'fêler', 'félon', 'femme', 'fente', 'ferai', 'ferme', 'fermé', 'ferré', 'ferry', 'fêter', 'fêtes', 'fibre', 'fiche', 'fichu', 'fière', 'fiers', 'figue', 'filer', 'files', 'filet', 'fille', 'filmé', 'films', 'filon', 'filou', 'final', 'finie', 'finir', 'finis', 'finit', 'firme', 'fixée', 'fixer', 'fixes', 'fixés', 'flair', 'flanc', 'flash', 'fléau', 'fleur', 'flore', 'flots', 'floue', 'flous', 'foire', 'folie', 'folle', 'foncé', 'fonda', 'fonde', 'fondé', 'fonds', 'fonte', 'force', 'forcé', 'forer', 'forêt', 'forge', 'forgé', 'forme', 'formé', 'forte', 'forts', 'forum', 'fosse', 'fossé', 'fouet', 'fouir', 'foule', 'fours', 'foyer', 'frais', 'franc', 'frein', 'frère', 'frigo', 'frime', 'frire', 'frisé', 'froid', 'frôlé', 'front', 'fruit', 'fuite', 'fumée', 'fumer', 'fumet', 'furet', 'furie', 'fusée', 'fusil', 'futur', 'gaffe', 'gager', 'gages', 'gagne', 'gagné', 'gaine', 'gains', 'galle', 'gamin', 'gamme', 'ganse', 'gants', 'garce', 'garde', 'gardé', 'garer', 'gares', 'gâter', 'gaver', 'gazon', 'géant', 'geler', 'gémir', 'gêner', 'gènes', 'gênés', 'génie', 'genou', 'genre', 'geôle', 'gerbe', 'gérée', 'gérer', 'gérés', 'germe', 'gésir', 'geste', 'gibet', 'gifle', 'gigot', 'giron', 'gitan', 'givre', 'glace', 'glacé', 'globe', 'glose', 'glosé', 'gober', 'godet', 'golfe', 'gombo', 'gomme', 'gorge', 'gosse', 'goulu', 'goûts', 'grâce', 'grade', 'grain', 'grand', 'grave', 'gravé', 'grêle', 'grené', 'grenu', 'grève', 'grise', 'grive', 'group', 'guêpe', 'guère', 'gueux', 'guide', 'guise', 'gypse', 'habit', 'hache', 'haine', 'haler', 'hâler', 'halle', 'halte', 'hampe', 'hante', 'hanté', 'happe', 'harpe', 'hâter', 'haute', 'hauts', 'havas', 'havre', 'hebdo', 'hélas', 'héler', 'herbe', 'héron', 'héros', 'heure', 'hibou', 'hiver', 'hoché', 'homme', 'honte', 'horst', 'hôtel', 'hôtes', 'houle', 'house', 'huile', 'humer', 'hutte', 'hyène', 'hymne', 'hyper', 'iceux', 'icône', 'idéal', 'idées', 'idiot', 'image', 'imagé', 'imide', 'imper', 'impie', 'impôt', 'impur', 'index', 'indic', 'inouï', 'inter', 'intra', 'irait', 'iront', 'isolé', 'issue', 'issus', 'jadis', 'jambe', 'jaser', 'jauge', 'jaune', 'javel', 'jeans', 'jetée', 'jeter', 'jetés', 'jeton', 'jette', 'jeudi', 'jeune', 'jeûne', 'joies', 'joint', 'joker', 'jolie', 'jolis', 'jouée', 'jouer', 'jouet', 'jouir', 'jouit', 'jours', 'jugée', 'juger', 'juges', 'jugés', 'juifs', 'juive', 'juive', 'jules', 'junte', 'jupes', 'jupon', 'juppé', 'jurer', 'jurés', 'juron', 'jurys', 'juste', 'kadar', 'kafka', 'kanak', 'kazan', 'kelly', 'kenya', 'kharg', 'kilos', 'krach', 'kyste', 'label', 'lacet', 'lacez', 'lâche', 'lâché', 'lacté', 'laïcs', 'laine', 'lainé', 'laïus', 'lamie', 'lampe', 'lance', 'lancé', 'lange', 'lapin', 'laque', 'large', 'larme', 'laser', 'lasse', 'latin', 'latte', 'laure', 'laval', 'laver', 'leçon', 'leeds', 'légal', 'léger', 'lendl', 'lente', 'lents', 'leroy', 'léser', 'létal', 'leurs', 'levée', 'lever', 'levés', 'lèvre', 'lewis', 'liant', 'liban', 'libre', 'libye', 'licou', 'liées', 'liège', 'liens', 'lieux', 'ligne', 'ligue', 'lilas', 'lille', 'limer', 'linda', 'linge', 'lions', 'lires', 'lisse', 'liste', 'liszt', 'litre', 'livre', 'livré', 'lobby', 'local', 'loger', 'loges', 'logés', 'logis', 'loire', 'longs', 'lopin', 'loque', 'louer', 'louis', 'loupé', 'loups', 'lourd', 'loyal', 'loyer', 'lueur', 'luire', 'lundi', 'lutte', 'luxer', 'lycée', 'lysée', 'maçon', 'macro', 'madré', 'mafia', 'magie', 'mains', 'maire', 'major', 'malin', 'malle', 'malte', 'maman', 'manet', 'mange', 'manie', 'manne', 'mardi', 'marée', 'marge', 'maria', 'marie', 'marié', 'marin', 'mario', 'marks', 'marne', 'maroc', 'marre', 'masse', 'match', 'mater', 'maths', 'matif', 'matin', 'matra', 'mauve', 'mayas', 'mèche', 'media', 'média', 'méfie', 'mêlée', 'mêler', 'mêlés', 'melon', 'mêmes', 'menée', 'mener', 'menés', 'menus', 'merci', 'merde', 'mères', 'merle', 'messe', 'métal', 'météo', 'métis', 'mètre', 'métro', 'mette', 'meurt', 'meuse', 'meyer', 'miami', 'micro', 'miens', 'mieux', 'milan', 'milan', 'mille', 'mince', 'mines', 'minet', 'minou', 'miser', 'mises', 'mitre', 'mixte', 'moche', 'modes', 'moine', 'moins', 'moise', 'moisi', 'moite', 'monde', 'monte', 'monté', 'moore', 'moque', 'moral', 'morin', 'morne', 'morte', 'morts', 'morue', 'morve', 'motif', 'motos', 'moule', 'moyen', 'muets', 'mufle', 'mules', 'munir', 'munis', 'mûres', 'muret', 'mûrir', 'musée', 'music', 'myope', 'mythe', 'nabot', 'nager', 'nancy', 'nappe', 'natal', 'natif', 'natte', 'naval', 'navet', 'nazie', 'nazis', 'néant', 'nègre', 'neige', 'nerfs', 'nervi', 'nette', 'neufs', 'neuve', 'neveu', 'niais', 'niant', 'nièce', 'nigel', 'niger', 'nîmes', 'nobel', 'noble', 'noces', 'noeud', 'noire', 'noirs', 'nolis', 'nomme', 'nommé', 'nonce', 'nonne', 'norme', 'noter', 'notes', 'notre', 'nôtre', 'nouer', 'noyau', 'noyer', 'nuage', 'nuire', 'nuits', 'nulle', 'nuque', 'nurse', 'oasis', 'obéir', 'obèse', 'objet', 'obtus', 'océan', 'odéon', 'odeur', 'odile', 'oeufs', 'offre', 'oisif', 'olive', 'ombre', 'oncle', 'ondes', 'ongle', 'opéra', 'opère', 'opéré', 'orage', 'orale', 'ordre', 'orgue', 'orner', 'ortie', 'oscar', 'osent', 'otage', 'ouate', 'oubli', 'ouest', 'ouïes', 'ourse', 'outil', 'outre', 'ouvre', 'ovule', 'oxyde', 'pablo', 'pacte', 'pages', 'païen', 'paire', 'pairs', 'pâlir', 'palis', 'palme', 'panne', 'parce', 'parcs', 'parer', 'paris', 'paris', 'parle', 'parlé', 'parmi', 'paroi', 'parti', 'parts', 'parue', 'parus', 'parut', 'passa', 'passe', 'passé', 'pâtée', 'pâtes', 'pâtir', 'pâtre', 'patte', 'paume', 'pause', 'payée', 'payer', 'payés', 'payot', 'péage', 'pêche', 'péché', 'pedro', 'pègre', 'peine', 'peiné', 'peint', 'pékin', 'peler', 'pelle', 'pénal', 'pence', 'pendu', 'pénis', 'penne', 'pense', 'pensé', 'pente', 'pentu', 'pépin', 'perçu', 'perdu', 'perec', 'pères', 'pérès', 'péril', 'périr', 'perle', 'perme', 'perte', 'peser', 'peste', 'peter', 'petit', 'petre', 'pétri', 'peuhl', 'phare', 'phase', 'philo', 'phono', 'photo', 'piano', 'pièce', 'pieds', 'piège', 'piété', 'pieux', 'piger', 'pilon', 'pilot', 'pince', 'pinte', 'pique', 'pires', 'piste', 'pitié', 'pitre', 'pivot', 'place', 'placé', 'plage', 'plaie', 'plait', 'plane', 'plans', 'plant', 'plate', 'plats', 'plèbe', 'plein', 'plier', 'plomb', 'plouc', 'pluie', 'plume', 'pneus', 'poche', 'poêle', 'poème', 'poète', 'poids', 'poing', 'point', 'poire', 'polar', 'pôles', 'polir', 'pomme', 'pompe', 'poney', 'ponts', 'porta', 'porte', 'porté', 'porto', 'ports', 'posée', 'poser', 'posés', 'poste', 'potes', 'potin', 'pouce', 'poule', 'pouls', 'poupe', 'prend', 'prête', 'prêté', 'prêts', 'preux', 'prévu', 'prier', 'priés', 'prime', 'primé', 'prise', 'prive', 'privé', 'probe', 'proie', 'promu', 'prône', 'prose', 'prost', 'prote', 'proue', 'prune', 'puant', 'puces', 'puche', 'puisé', 'puits', 'pulpe', 'punir', 'pures', 'purge', 'purin', 'quais', 'quand', 'quant', 'quart', 'quasi', 'quels', 'quête', 'queue', 'quota', 'rabat', 'races', 'radar', 'radin', 'radio', 'radis', 'ragot', 'raide', 'raids', 'rails', 'râler', 'rames', 'rampe', 'range', 'rangé', 'rangs', 'raoul', 'râper', 'rares', 'raser', 'rater', 'ratés', 'ravel', 'ravin', 'ravir', 'ravis', 'rayer', 'rayon', 'réagi', 'rebut', 'recel', 'rêche', 'récif', 'récit', 'récré', 'reçue', 'recul', 'reçus', 'réels', 'réélu', 'refus', 'régie', 'régis', 'règle', 'réglé', 'réglo', 'règne', 'reich', 'reims', 'reine', 'reins', 'rejet', 'relie', 'relié', 'remet', 'remis', 'rende', 'rendu', 'rênes', 'renié', 'renom', 'rente', 'repas', 'répit', 'repli', 'repos', 'resta', 'reste', 'resté', 'réuni', 'rêver', 'rêves', 'revêt', 'revue', 'rhône', 'rhume', 'riche', 'riper', 'rires', 'risée', 'rites', 'rival', 'rives', 'robes', 'robin', 'robot', 'roche', 'rôder', 'roger', 'rôles', 'roman', 'roméo', 'rompt', 'rompu', 'ronde', 'ronéo', 'rosée', 'roses', 'rossi', 'rôtir', 'rouen', 'rouer', 'roues', 'rouge', 'roule', 'round', 'route', 'rover', 'royal', 'ruban', 'ruche', 'rudes', 'rugby', 'ruine', 'rupin', 'rural', 'ruser', 'sabir', 'sable', 'sabre', 'sache', 'sacré', 'sages', 'saine', 'saint', 'saisi', 'saler', 'sales', 'salin', 'salir', 'salle', 'salon', 'salue', 'salué', 'salut', 'santé', 'saoul', 'saper', 'sapes', 'sapin', 'satin', 'sauce', 'sauge', 'saule', 'saura', 'saute', 'sauté', 'sauve', 'sauvé', 'savez', 'savon', 'sceau', 'scène', 'scier', 'scoop', 'score', 'sèche', 'séide', 'seine', 'seing', 'seins', 'seize', 'selim', 'selle', 'selon', 'semer', 'semis', 'sénat', 'senne', 'sensé', 'sente', 'senti', 'seoir', 'serai', 'serge', 'série', 'serra', 'serre', 'serré', 'serve', 'servi', 'seuil', 'seule', 'seuls', 'sévir', 'shell', 'shoah', 'shoot', 'short', 'sicav', 'siège', 'siens', 'sigle', 'signe', 'signé', 'singe', 'sinon', 'sioux', 'sirop', 'sites', 'sitôt', 'situe', 'situé', 'snack', 'sobre', 'socle', 'soeur', 'sofia', 'soins', 'soirs', 'solde', 'somme', 'sonde', 'songe', 'songé', 'sonne', 'sonné', 'sorte', 'sorti', 'souci', 'soude', 'soupe', 'sourd', 'soute', 'speed', 'spore', 'sport', 'stade', 'stage', 'stand', 'stars', 'start', 'stasi', 'statu', 'stein', 'stern', 'steve', 'stick', 'stock', 'style', 'stylo', 'suant', 'suave', 'subie', 'subir', 'subit', 'sucer', 'sucre', 'sucré', 'suède', 'sueur', 'suffi', 'suite', 'suivi', 'sujet', 'super', 'sûres', 'surgi', 'swapo', 'sympa', 'syrie', 'tabac', 'table', 'tabou', 'tache', 'tâche', 'taire', 'talon', 'talus', 'tamis', 'tango', 'tanin', 'tante', 'taper', 'tapie', 'tapis', 'tarde', 'tardé', 'tarif', 'tarin', 'tarir', 'taris', 'tarte', 'tassa', 'tasse', 'tassé', 'tâter', 'taule', 'taupe', 'taxer', 'taxes', 'taxis', 'teint', 'télex', 'telle', 'tempe', 'tempo', 'temps', 'tendu', 'tenir', 'ténor', 'tenta', 'tente', 'tenté', 'tenue', 'tenus', 'terme', 'terne', 'terre', 'tests', 'têtes', 'texte', 'thème', 'thèse', 'thune', 'tiare', 'tibia', 'tiède', 'tiens', 'tient', 'tiers', 'tigre', 'tigré', 'tilde', 'timon', 'tirée', 'tirer', 'tirés', 'tissé', 'tissu', 'titan', 'titre', 'toile', 'toits', 'tollé', 'tombe', 'tombé', 'tonne', 'tonus', 'toqué', 'torse', 'total', 'touer', 'tours', 'trace', 'tracé', 'tract', 'trahi', 'train', 'trait', 'trame', 'trêve', 'tribu', 'trier', 'trois', 'tronc', 'trône', 'trous', 'trust', 'tuant', 'tubes', 'tuées', 'tuent', 'tueur', 'tuile', 'turbo', 'tuyau', 'types', 'tyran', 'ukase', 'ultra', 'unies', 'union', 'unité', 'urine', 'urnes', 'usage', 'usine', 'usuel', 'usure', 'utile', 'vache', 'vague', 'valet', 'valse', 'value', 'vanné', 'varie', 'varié', 'vaste', 'vécue', 'veine', 'vendu', 'venez', 'venin', 'venir', 'vente', 'vents', 'venue', 'venus', 'vénus', 'verbe', 'verge', 'verne', 'verni', 'verra', 'verre', 'verse', 'versé', 'verso', 'verte', 'verts', 'vertu', 'verve', 'veste', 'vêtir', 'vêtus', 'veule', 'veuve', 'vexer', 'vichy', 'vidéo', 'vider', 'vides', 'vieil', 'viens', 'vient', 'vieux', 'vigne', 'villa', 'ville', 'vingt', 'virer', 'viril', 'virus', 'visas', 'visée', 'viser', 'vital', 'vitre', 'vitro', 'vives', 'vivra', 'vivre', 'vodka', 'voeux', 'vogue', 'voici', 'voies', 'voile', 'voire', 'volée', 'voler', 'volet', 'vomir', 'votée', 'voter', 'votes', 'votre', 'vôtre', 'vouée', 'vouer', 'voués', 'voulu', 'voûte', 'voyez', 'voyou', 'vraie', 'vrais', 'vulgo', 'wagon', 'yacht', 'zébré', 'zones']; export default words
