import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Shield, Cookie, Eye, Lock, Database, UserCheck } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-primary mr-4" />
              <h1 className="text-5xl font-bold text-foreground">
                Politique de Confidentialité
              </h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Protection de vos données personnelles - RGPD
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>

          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {/* Introduction */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Introduction
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Le Goéland accorde une grande importance à la protection de vos données personnelles. 
                  Cette politique de confidentialité vous informe de la manière dont nous collectons, 
                  utilisons et protégeons vos informations conformément au Règlement Général sur la 
                  Protection des Données (RGPD).
                </p>
              </div>
            </Card>

            {/* Responsable du traitement */}
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <UserCheck className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">
                  Responsable du traitement
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">Établissement :</span> Le Goéland - Bar Café PMU
                </p>
                <p>
                  <span className="font-semibold text-foreground">Adresse :</span> Av. du Général Pierre Billotte, 94000 Créteil, France
                </p>
                <p>
                  <span className="font-semibold text-foreground">Email :</span>{" "}
                  <a href="mailto:goeland94000@gmail.com" className="text-primary hover:underline">
                    goeland94000@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-foreground">Téléphone :</span> 06 01 39 24 99
                </p>
              </div>
            </Card>

            {/* Données collectées */}
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Database className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">
                  Données personnelles collectées
                </h2>
              </div>
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">
                    Via le formulaire de contact
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone (optionnel)</li>
                    <li>Message ou demande</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">
                    Via le formulaire de réservation
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Date et heure de réservation</li>
                    <li>Nombre de personnes</li>
                    <li>Type d'événement ou occasion</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">
                    Données de navigation
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Adresse IP</li>
                    <li>Type de navigateur</li>
                    <li>Pages visitées</li>
                    <li>Durée de visite</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Finalités */}
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Eye className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">
                  Finalités du traitement
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>Vos données personnelles sont collectées et traitées pour les finalités suivantes :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Traiter vos demandes de contact et y répondre</li>
                  <li>Gérer vos réservations de table ou d'événements</li>
                  <li>Vous informer de nos événements et actualités (avec votre consentement)</li>
                  <li>Améliorer nos services et votre expérience sur notre site</li>
                  <li>Respecter nos obligations légales et réglementaires</li>
                  <li>Établir des statistiques de fréquentation</li>
                </ul>
              </div>
            </Card>

            {/* Base légale */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Base légale du traitement
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Le traitement de vos données repose sur :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><span className="font-semibold text-foreground">Votre consentement</span> (formulaires de contact et réservation)</li>
                  <li><span className="font-semibold text-foreground">L'exécution d'un contrat</span> (réservations)</li>
                  <li><span className="font-semibold text-foreground">Notre intérêt légitime</span> (amélioration de nos services)</li>
                  <li><span className="font-semibold text-foreground">Nos obligations légales</span> (comptabilité, fiscalité)</li>
                </ul>
              </div>
            </Card>

            {/* Destinataires */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Destinataires des données
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Vos données personnelles sont destinées aux services internes du Goéland. 
                  Nous ne vendons ni ne louons vos données à des tiers.
                </p>
                <p>
                  Vos données peuvent être partagées avec :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Notre hébergeur web (Lovable / GPT Workspace Ltd)</li>
                  <li>Nos prestataires techniques (en cas d'utilisation de services tiers)</li>
                  <li>Les autorités compétentes si requis par la loi</li>
                </ul>
              </div>
            </Card>

            {/* Durée de conservation */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Durée de conservation
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><span className="font-semibold text-foreground">Demandes de contact :</span> 3 ans après le dernier contact</li>
                  <li><span className="font-semibold text-foreground">Réservations :</span> 1 an après la date de réservation</li>
                  <li><span className="font-semibold text-foreground">Données comptables :</span> 10 ans (obligation légale)</li>
                  <li><span className="font-semibold text-foreground">Cookies :</span> 13 mois maximum</li>
                </ul>
              </div>
            </Card>

            {/* Vos droits */}
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Lock className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">
                  Vos droits
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><span className="font-semibold text-foreground">Droit d'accès :</span> obtenir une copie de vos données</li>
                  <li><span className="font-semibold text-foreground">Droit de rectification :</span> corriger vos données inexactes</li>
                  <li><span className="font-semibold text-foreground">Droit à l'effacement :</span> demander la suppression de vos données</li>
                  <li><span className="font-semibold text-foreground">Droit à la limitation :</span> limiter le traitement de vos données</li>
                  <li><span className="font-semibold text-foreground">Droit à la portabilité :</span> récupérer vos données dans un format structuré</li>
                  <li><span className="font-semibold text-foreground">Droit d'opposition :</span> vous opposer au traitement de vos données</li>
                  <li><span className="font-semibold text-foreground">Droit de retirer votre consentement :</span> à tout moment</li>
                </ul>
                <p className="mt-6">
                  Pour exercer ces droits, contactez-nous à{" "}
                  <a href="mailto:goeland94000@gmail.com" className="text-primary hover:underline">
                    goeland94000@gmail.com
                  </a>{" "}
                  ou par courrier à notre adresse.
                </p>
                <p>
                  Vous disposez également du droit d'introduire une réclamation auprès de la CNIL 
                  (Commission Nationale de l'Informatique et des Libertés) si vous estimez que vos 
                  droits ne sont pas respectés.
                </p>
              </div>
            </Card>

            {/* Cookies */}
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Cookie className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">
                  Cookies et traceurs
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Notre site utilise des cookies pour améliorer votre expérience de navigation.
                </p>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Cookies strictement nécessaires</h3>
                  <p>
                    Ces cookies sont indispensables au fonctionnement du site et ne peuvent être désactivés.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Cookies de mesure d'audience</h3>
                  <p>
                    Ces cookies nous permettent de mesurer la fréquentation du site et d'améliorer nos services.
                  </p>
                </div>

                <p>
                  Vous pouvez à tout moment paramétrer ou refuser les cookies via les paramètres de votre navigateur.
                </p>
              </div>
            </Card>

            {/* Sécurité */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Sécurité des données
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées 
                  pour assurer la sécurité et la confidentialité de vos données personnelles, et pour 
                  les protéger contre toute destruction, perte, altération, divulgation ou accès non autorisé.
                </p>
                <p>
                  Notre site utilise le protocole HTTPS pour sécuriser les échanges de données.
                </p>
              </div>
            </Card>

            {/* Modifications */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Modifications de la politique
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                  Toute modification sera publiée sur cette page avec une date de mise à jour.
                </p>
                <p>
                  Nous vous invitons à consulter régulièrement cette page pour prendre connaissance 
                  des éventuelles modifications.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
