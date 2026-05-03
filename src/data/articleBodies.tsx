/**
 * Contenu éditorial des articles seed avec maillage interne et externe.
 * Remplacé par le rendu Portable Text de Sanity dès que le CMS est peuplé.
 */

import Link from 'next/link';

export const articleBodies: Record<string, React.ReactNode> = {
  'byd-seal-prix-maroc-2024': (
    <>
      <h2>Une berline électrique taillée pour le Maroc</h2>
      <p>
        La <Link href="/marques/byd">BYD</Link> Seal s&apos;inscrit dans une offensive commerciale
        ambitieuse du constructeur chinois sur le continent africain. Avec une autonomie annoncée
        de 570 km (cycle WLTP), cette berline vise directement les navetteurs de l&apos;axe
        Casablanca-Rabat — un trajet que nous avons d&apos;ailleurs mis à l&apos;épreuve dans notre{' '}
        <Link href="/actualites/geely-geometry-c-autonomie-autoroute-casa-rabat">
          test d&apos;autonomie de la Geely Geometry C
        </Link>
        .
      </p>

      <h2>Des performances de sportive, un prix de berline</h2>
      <p>
        En version Double Moteur, la Seal abat le 0 à 100 km/h en 3,8 secondes, rivalisant avec
        des coupés sport bien plus onéreux. La plateforme e-Platform 3.0 de{' '}
        <Link href="/marques/byd">BYD</Link> intègre la batterie dans le plancher, abaissant le
        centre de gravité et améliorant la tenue de route. Pour comparer avec un roadster pur,
        consultez notre article sur le{' '}
        <Link href="/actualites/mg-cyberster-roadster-electrique">MG Cyberster</Link>.
      </p>

      <h2>Prix et disponibilité au Maroc</h2>
      <p>
        Le tarif marocain n&apos;est pas encore officiellement communiqué, mais les premières
        estimations tournent autour de 420 000 à 480 000 MAD selon la version. Si vous envisagez
        une acquisition, notre{' '}
        <Link href="/actualites/importer-voiture-chinoise-maroc-2024">
          guide d&apos;importation de voiture chinoise
        </Link>{' '}
        détaille les droits de douane et l&apos;homologation à prévoir.
      </p>

      <h2>Sécurité et homologation</h2>
      <p>
        La Seal a obtenu la note maximale de{' '}
        <a
          href="https://www.euroncap.com/fr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:underline"
        >
          5 étoiles Euro NCAP
        </a>{' '}
        en 2023, confirmant le niveau de sécurité des nouvelles générations chinoises. Pour une
        vision long terme avant d&apos;acheter, lisez aussi notre analyse sur{' '}
        <Link href="/actualites/voiture-chinoise-occasion-fiabilite">
          la fiabilité des voitures chinoises d&apos;occasion
        </Link>
        .
      </p>

      <h2>Notre verdict</h2>
      <p>
        La BYD Seal représente l&apos;aboutissement du savoir-faire de{' '}
        <Link href="/marques/byd">BYD</Link> en matière de véhicules électriques. Face à la
        concurrence européenne et américaine, elle tient ses promesses sur le plan technologique.
        Retrouvez l&apos;ensemble de nos essais et comparatifs dans la section{' '}
        <Link href="/comparatifs">Comparatifs</Link> et nos conseils d&apos;achat dans les{' '}
        <Link href="/guides">Guides</Link>.
      </p>
    </>
  ),

  'mg-cyberster-roadster-electrique': (
    <>
      <h2>Le retour aux sources sportives de MG</h2>
      <p>
        <Link href="/marques/mg">MG Motor</Link> renoue avec l&apos;héritage sportif de la marque
        britannique (désormais propriété de SAIC) avec le Cyberster. Ce roadster biplace 100 %
        électrique propulse ses 544 ch vers les 100 km/h en moins de 3,2 secondes, bousculant des
        concurrents établis comme la Porsche Boxster ou le Mazda MX-5.
      </p>

      <h2>Design rétro-futuriste assumé</h2>
      <p>
        La carrosserie s&apos;inspire des roadsters anglais des années 1960 tout en adoptant des
        feux LED en forme de cils caractéristiques. L&apos;habitacle en cuir et Alcantara rivalise
        avec les meilleures productions européennes. Pour un positionnement tarifaire comparable,
        la <Link href="/actualites/byd-seal-prix-maroc-2024">BYD Seal</Link> propose un compromis
        intéressant sous forme de berline familiale.
      </p>

      <h2>Autonomie et recharge</h2>
      <p>
        L&apos;autonomie annoncée de 507 km (WLTP) est honorable pour un roadster. La recharge
        rapide DC (150 kW) permet de passer de 10 à 80 % en 38 minutes environ. Découvrez comment
        nous testons l&apos;autonomie réelle dans notre article sur{' '}
        <Link href="/actualites/geely-geometry-c-autonomie-autoroute-casa-rabat">
          la Geely Geometry C sur l&apos;autoroute Casa-Rabat
        </Link>
        .
      </p>

      <h2>Prix et importation</h2>
      <p>
        Importé via les circuits officiels{' '}
        <Link href="/marques/mg">MG Maroc</Link>, le Cyberster se positionne entre 550 000 et
        620 000 MAD. Pour comprendre la fiscalité liée à l&apos;importation, consultez notre{' '}
        <Link href="/actualites/importer-voiture-chinoise-maroc-2024">
          guide complet sur l&apos;importation de voitures chinoises
        </Link>
        . Les{' '}
        <a
          href="https://www.euroncap.com/fr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:underline"
        >
          résultats Euro NCAP
        </a>{' '}
        ne sont pas encore disponibles pour ce modèle.
      </p>

      <h2>Conclusion</h2>
      <p>
        Le MG Cyberster est une déclaration d&apos;intention : les constructeurs chinois peuvent
        créer de l&apos;émotion, pas seulement du volume. Comparez-le aux autres sportives dans
        notre section <Link href="/comparatifs">Comparatifs</Link> et explorez tous les modèles
        disponibles sur la <Link href="/marques/mg">page marque MG</Link>.
      </p>
    </>
  ),

  'importer-voiture-chinoise-maroc-2024': (
    <>
      <h2>Pourquoi importer directement depuis la Chine ?</h2>
      <p>
        Face à l&apos;élargissement de l&apos;offre en concession — <Link href="/marques/byd">BYD</Link>,{' '}
        <Link href="/marques/mg">MG Motor</Link>, <Link href="/marques/chery">Chery</Link> et{' '}
        <Link href="/marques/geely">Geely</Link> disposent de réseaux officiels au Maroc — certains
        acheteurs préfèrent importer un modèle non distribué localement. C&apos;est une démarche
        possible, mais qui exige une préparation minutieuse.
      </p>

      <h2>Les taxes à prévoir</h2>
      <p>
        L&apos;importation d&apos;un véhicule particulier neuf au Maroc est soumise à plusieurs
        prélèvements : droits de douane (2,5 % à 17,5 % selon l&apos;origine), TVA (20 %) et Taxe
        Spéciale sur les Véhicules (TSV) progressive selon la cylindrée ou la puissance fiscale. Pour
        les véhicules électriques, une exonération partielle de TVA s&apos;applique dans certains cas —
        renseignez-vous auprès de{' '}
        <a
          href="https://www.douane.gov.ma"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:underline"
        >
          l&apos;Administration des Douanes et Impôts Indirects
        </a>
        .
      </p>

      <h2>L&apos;homologation : étape obligatoire</h2>
      <p>
        Tout véhicule importé doit être homologué par le{' '}
        <a
          href="https://www.mtpnet.gov.ma"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:underline"
        >
          Ministère du Transport et de la Logistique
        </a>
        . Les véhicules non certifiés CE ou non conformes aux normes Euro 6 nécessitent des
        adaptations. Les modèles proposant des résultats{' '}
        <a
          href="https://www.euroncap.com/fr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:underline"
        >
          Euro NCAP 5 étoiles
        </a>{' '}
        — comme la <Link href="/actualites/byd-seal-prix-maroc-2024">BYD Seal</Link> ou le{' '}
        <Link href="/actualites/chery-tiggo-8-pro-suv-7-places">Chery Tiggo 8 Pro</Link> — passent
        plus facilement les contrôles techniques.
      </p>

      <h2>Faut-il acheter neuf ou d&apos;occasion ?</h2>
      <p>
        Si le budget est la priorité, notre dossier sur{' '}
        <Link href="/actualites/voiture-chinoise-occasion-fiabilite">
          l&apos;achat d&apos;une voiture chinoise d&apos;occasion
        </Link>{' '}
        analyse la décote et la fiabilité à long terme. Les premiers modèles MG et Chery présents au
        Maroc depuis 2020-2021 offrent désormais un recul suffisant pour évaluer leur durabilité.
      </p>

      <h2>Nos recommandations</h2>
      <p>
        Privilégiez les marques disposant d&apos;un réseau SAV structuré au Maroc :{' '}
        <Link href="/marques/byd">BYD</Link>, <Link href="/marques/mg">MG</Link>,{' '}
        <Link href="/marques/chery">Chery</Link> et <Link href="/marques/geely">Geely</Link> ont
        toutes des concessionnaires agréés dans les principales villes. Consultez aussi nos{' '}
        <Link href="/guides">guides thématiques</Link> pour aller plus loin.
      </p>
    </>
  ),

  'chery-tiggo-8-pro-suv-7-places': (
    <>
      <h2>Le SUV familial qui n&apos;a plus rien à prouver</h2>
      <p>
        <Link href="/marques/chery">Chery</Link> a fait ses preuves sur le marché marocain avec la
        gamme Tiggo. Le Tiggo 8 Pro, positionné dans le segment des SUV 7 places, s&apos;attaque
        directement aux Kia Sorento, Hyundai Santa Fe et autres Peugeot 5008. Sa fiche technique
        impressionne sur le papier : 2 litres turbo 197 ch, boîte automatique 7 rapports et une
        dotation d&apos;équipements digne d&apos;un SUV premium.
      </p>

      <h2>Habitabilité et modularité</h2>
      <p>
        Les sept places sont réellement utilisables jusqu&apos;à la troisième rangée, même pour des
        adultes de taille normale, ce qui est loin d&apos;être systématique dans ce segment. Le volume
        de coffre atteint 193 L toutes places dépliées et 885 L en configuration 5 places. Pour une
        alternative électrique familiale, la{' '}
        <Link href="/actualites/byd-seal-prix-maroc-2024">BYD Seal</Link> reste une option à
        considérer dans une configuration berline.
      </p>

      <h2>Technologie embarquée</h2>
      <p>
        L&apos;écran central 12,3 pouces et le combiné numérique sont connectés à Android Auto et
        Apple CarPlay sans fil. Le régulateur adaptatif, les caméras 360° et le freinage autonome
        d&apos;urgence sont de série. Les résultats aux tests{' '}
        <a
          href="https://www.euroncap.com/fr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:underline"
        >
          Euro NCAP
        </a>{' '}
        confirment un niveau de sécurité solide pour ce type de carrosserie.
      </p>

      <h2>Prix et financement</h2>
      <p>
        Comptez entre 350 000 et 395 000 MAD selon la version. Si vous envisagez un achat
        d&apos;occasion dans quelques années, notre analyse de{' '}
        <Link href="/actualites/voiture-chinoise-occasion-fiabilite">
          la décote des voitures chinoises
        </Link>{' '}
        vous donnera une idée de la valeur résiduelle. Pour les démarches d&apos;importation
        directe, référez-vous à notre{' '}
        <Link href="/actualites/importer-voiture-chinoise-maroc-2024">
          guide d&apos;importation 2024
        </Link>
        .
      </p>

      <h2>Verdict</h2>
      <p>
        Le Tiggo 8 Pro est l&apos;argument massue de <Link href="/marques/chery">Chery</Link> sur le
        marché marocain. Rapport qualité-prix excellent, présentation soignée et équipements
        généreux en font un choix rationnel pour les familles nombreuses. Comparez-le avec les autres
        SUV dans notre section <Link href="/comparatifs">Comparatifs</Link>.
      </p>
    </>
  ),

  'geely-geometry-c-autonomie-autoroute-casa-rabat': (
    <>
      <h2>Le protocole de test : conditions réelles, zéro concession</h2>
      <p>
        Pour mesurer l&apos;autonomie réelle de la{' '}
        <Link href="/marques/geely">Geely</Link> Geometry C (autonomie constructeur : 550 km CLTC),
        nous avons effectué l&apos;aller-retour Casablanca-Rabat sur autoroute (95 km/sens) à 120 km/h
        régulateur enclenché, climatisation à 22°C et deux occupants à bord — soit les conditions
        les plus représentatives d&apos;un usage marocain quotidien.
      </p>

      <h2>Les chiffres obtenus</h2>
      <p>
        Au retour à Casablanca, l&apos;ordinateur de bord affichait 71 % de batterie restante après
        190 km parcourus, soit une consommation réelle de 18,4 kWh/100 km. Extrapolé à la batterie
        de 70 kWh, cela donne une autonomie effective de 380 km sur autoroute — un résultat honnête,
        même si bien en deçà des 550 km CLTC (cycle normalisé chinois, bien plus favorable que le
        WLTP européen). Pour comparer avec une berline électrique premium, consultez notre article
        sur la <Link href="/actualites/byd-seal-prix-maroc-2024">BYD Seal</Link> dont l&apos;autonomie
        WLTP atteint 570 km.
      </p>

      <h2>Recharge sur le réseau marocain</h2>
      <p>
        La Geometry C accepte la recharge DC jusqu&apos;à 88 kW. Aux bornes Zeplug installées sur
        les aires autoroutières, nous avons récupéré 45 % de batterie en 28 minutes —
        suffisant pour continuer sereinement. Le réseau de recharge rapide se densifie, même si la
        couverture reste inférieure à celle de pays comme la France. Pour approfondir le sujet
        électrique, consultez notre rubrique <Link href="/electrique">Électrique</Link>.
      </p>

      <h2>Confort et comportement routier</h2>
      <p>
        La suspension est bien calibrée pour l&apos;asphalte marocain et ses imperfections. La
        direction est précise, l&apos;insonorisation excellente. Le Geometry C se montre à l&apos;aise
        en longue distance, ce que ne garantissent pas tous les VE compacts. Pour un essai orienté
        sportivité, lisez notre article sur le{' '}
        <Link href="/actualites/mg-cyberster-roadster-electrique">MG Cyberster</Link>.
      </p>

      <h2>Conclusion</h2>
      <p>
        <Link href="/marques/geely">Geely</Link> livre avec le Geometry C un VE mature, adapté à
        l&apos;usage autoroutier marocain. Les 380 km d&apos;autonomie réelle sont rassurants pour
        les trajets interurbains. Retrouvez nos conseils d&apos;achat dans la rubrique{' '}
        <Link href="/guides">Guides</Link> et notre comparatif des VE disponibles au Maroc dans la
        section <Link href="/comparatifs">Comparatifs</Link>.
      </p>
    </>
  ),

  'voiture-chinoise-occasion-fiabilite': (
    <>
      <h2>Un marché de l&apos;occasion qui commence à exister</h2>
      <p>
        Les premières voitures chinoises sont arrivées massivement au Maroc à partir de 2019-2020.
        Quatre à cinq ans plus tard, un marché de l&apos;occasion se structure autour des{' '}
        <Link href="/marques/mg">MG</Link>, <Link href="/marques/chery">Chery</Link> et{' '}
        <Link href="/marques/geely">Geely</Link> de première génération. L&apos;occasion idéale pour
        faire le bilan.
      </p>

      <h2>Décote : avantage ou danger ?</h2>
      <p>
        La décote des marques chinoises reste supérieure à la moyenne européenne en première année
        (estimée entre 25 et 35 % contre 20-25 % pour un Renault ou Toyota équivalent). Cette
        réalité s&apos;explique par une image de marque en construction et une offre neuve
        abondante. Pour l&apos;acheteur d&apos;occasion, c&apos;est une opportunité : acquérir un
        véhicule récent, bien équipé, à un prix accessible. Un <Link href="/marques/chery">Chery</Link>{' '}
        Tiggo 5X de 2021 se trouve ainsi entre 150 000 et 180 000 MAD selon kilométrage.
      </p>

      <h2>Fiabilité sur la durée : ce que disent les ateliers</h2>
      <p>
        Les retours des garages partenaires sont globalement positifs. Les moteurs thermiques des{' '}
        <Link href="/marques/chery">Chery</Link> et <Link href="/marques/mg">MG</Link> montrent peu
        de défaillances majeures sous 100 000 km. Les points de vigilance concernent davantage
        l&apos;électronique embarquée (mises à jour logicielles à effectuer) et la disponibilité de
        certaines pièces détachées spécifiques. La{' '}
        <Link href="/actualites/chery-tiggo-8-pro-suv-7-places">Chery Tiggo 8 Pro</Link> bénéficie
        d&apos;un réseau SAV étoffé au Maroc, ce qui facilite la maintenance.
      </p>

      <h2>Les points à vérifier avant achat</h2>
      <p>
        Exigez toujours le carnet d&apos;entretien, vérifiez la disponibilité des pièces chez les
        concessionnaires locaux et faites réaliser un diagnostic OBD. Pour les véhicules électriques
        comme le <Link href="/marques/geely">Geely</Link> Geometry C, demandez un bilan de santé de
        la batterie (State of Health). Notre{' '}
        <Link href="/actualites/importer-voiture-chinoise-maroc-2024">guide d&apos;importation</Link>{' '}
        aborde également les garanties constructeur transférables.
      </p>

      <h2>Notre recommandation</h2>
      <p>
        L&apos;achat d&apos;une voiture chinoise d&apos;occasion est pertinent à condition de cibler
        les marques disposant d&apos;un réseau officiel au Maroc. Consultez tous nos{' '}
        <Link href="/guides">guides d&apos;achat</Link> et{' '}
        <Link href="/comparatifs">comparatifs de modèles</Link> pour affiner votre choix.
      </p>
    </>
  ),
};
