Cloud

Cloud-Init:
Sie kennen die Grundelemente von YAML und erkennen diese in Cloud-init Dateien.
Grundelemente:
•	Schlüssel-Wert-Paare
•	Listen
•	Assoziative Arrays
•	Kommentare
•	Zeichenketten
•	Einrückung
Sie können die Vorteile von Cloud-init erläutern.
•	Automatisierung: Cloud-init automatisiert die Einrichtung von virtuellen Maschinen in der Cloud, sodass Sie nicht jeden Schritt manuell durchführen müssen.
•	Schnelligkeit: Es beschleunigt den Startprozess von virtuellen Maschinen, indem es Konfigurationen und Aufgaben parallel ausführt.
•	Plattformunabhängigkeit: Cloud-init funktioniert in verschiedenen Cloud-Umgebungen und auf lokalen virtuellen Maschinen.
•	Flexibilität: Sie können benutzerdefinierte Konfigurationen und Skripte verwenden, um virtuelle Maschinen an Ihre Anforderungen anzupassen.
•	Wiederherstellbarkeit: Sie können Images und Vorlagen erstellen, um die Bereitstellung von virtuellen Maschinen problemlos zu wiederholen.

Insgesamt vereinfacht Cloud-init die Verwaltung von Cloud-Ressourcen und beschleunigt die Bereitstellung von virtuellen Maschinen.

Sie kennen die wichtigsten Elemente von Cloud-init und können diese auch anwenden.
•	Cloud-Config: Das ist wie die Anleitung für Ihre virtuelle Maschine in der Cloud. Sie können darin festlegen, wie Ihr Computer heißt, wer darauf zugreifen kann und welche Programme installiert werden sollen.

•	Cloud-Init-Skripte: Stellen Sie sich vor, Sie haben eine Liste von Aufgaben, die Ihr Computer erledigen soll, sobald er startet. Diese Aufgaben können in Skripten geschrieben und in Ihrer Anleitung (Cloud-Config) aufgeführt werden.

•	Datasources: Datasources sind wie Informationsquellen. Cloud-init kann aus verschiedenen Quellen Informationen erhalten, um Ihre Anleitung zu vervollständigen. Das können Informationen über die Cloud-Umgebung sein, in der sich Ihr Computer befindet.

Sie kennen den Begriff "Infrastructure As Code" und können ihn erklären.
In einfachen Worten bedeutet dies, dass anstelle von manuellen Aktionen oder Klicks in einer Benutzeroberfläche, um beispielsweise einen Server einzurichten, Sie stattdessen Code verwenden, um genau zu beschreiben, wie dieser Server aussehen und funktionieren soll. Dieser Code kann dann automatisch ausgeführt werden, um die gewünschte Infrastruktur bereitzustellen.
Sie können Produkte nennen, die "Infrastructure As Code" anbieten (mit Hilfe des Internets).

AWS, Azure Resource Manager, Google Cloud deployment Manager

Virtualisierung:
Sie können den Begriff der "Virtualisierung" erläutern.
In der realen Welt bedeutet Virtualisierung, dass Sie einen einzigen Computer in mehrere virtuelle Computer aufteilen können. Jeder virtuelle Computer, oft als "virtuelle Maschine" bezeichnet, kann seine eigene Betriebssystem und Anwendungen haben, als ob es ein echter, unabhängiger Computer wäre. Dies ermöglicht es, die Hardware-Ressourcen effizienter zu nutzen und verschiedene Aufgaben oder Anwendungen voneinander zu isolieren. Virtualisierung wird in Rechenzentren, Cloud-Computing und zur Entwicklung und Testen von Software eingesetzt.

Sie können grob erklären welche Rolle ein "Hypervisor" in der Virtualisierung spielt.
Der Hypervisor kontrolliert, welcher virtuelle Computer wie viel Rechenleistung, Speicher und andere Ressourcen bekommt. Er stellt sicher, dass die virtuellen Computer voneinander isoliert sind und nicht miteinander kollidieren. Dies ermöglicht es, viele verschiedene Betriebssysteme und Anwendungen auf einem einzigen physischen Computer auszuführen, was in Rechenzentren, Cloud-Computing und bei der Softwareentwicklung sehr nützlich ist.

Sie kennen den Unterschied zwischen Typ 1 und Typ 2 Hypervisors und können den auch erklären.
Insgesamt ist der Hauptunterschied, dass ein Typ 1 Hypervisor direkt auf der Hardware des Computers läuft und mehr Leistung bietet, während ein Typ 2 Hypervisor auf einem bestehenden Betriebssystem ausgeführt wird und weniger Leistung bietet. Die Wahl zwischen beiden hängt von den spezifischen Anforderungen und dem Verwendungszweck ab.

Sie können den Begriff "Hyperscaler" erklären im Zusammenhang mit Cloud-Systemen.
Ein "Hyperscaler" ist wie ein Riese unter den Cloud-Anbietern. Diese Unternehmen betreiben riesige Rechenzentren mit enormen Mengen an Computerhardware und bieten Cloud-Dienste an, die von Unternehmen und Einzelpersonen genutzt werden.

Diese Anbieter sind oft weltweit tätig und haben die Fähigkeit, riesige Datenmengen zu speichern und zu verarbeiten. Sie bieten Dienste wie Serververmietung, Datenspeicherung und Datenverarbeitung in großem Maßstab an.

Sie kennen Schichten von Cloud-Systemen.
•	Infrastrukturschicht: Dies ist die unterste Schicht und umfasst die physische Hardware, wie Server, Speicher und Netzwerkgeräte. Diese Hardware bildet die Grundlage für die Cloud-Infrastruktur und stellt die Ressourcen bereit, die für die Ausführung von Anwendungen benötigt werden.

•	Virtualisierungsschicht: Diese Schicht ermöglicht die Erstellung virtueller Maschinen (VMs) oder Container. Sie teilt die physische Hardware in mehrere virtuelle Einheiten auf, die unabhängig voneinander betrieben werden können. Dies erhöht die Ressourcenauslastung und Flexibilität.

•	Plattformschicht: Hier finden Sie die Dienste und Tools, die für die Entwicklung, Bereitstellung und Verwaltung von Anwendungen in der Cloud benötigt werden. Dies umfasst Betriebssysteme, Datenbanken, Middleware und Entwicklungsumgebungen.

•	Anwendungsschicht: Dies ist die oberste Schicht und umfasst die tatsächlichen Anwendungen oder Software, die in der Cloud ausgeführt werden. Hier werden Webanwendungen, Datenbankanwendungen, Dienste und mehr erstellt und betrieben.

In einfachen Worten: Die Infrastrukturschicht bietet die physische Hardware, die Virtualisierungsschicht teilt diese Hardware auf, die Plattformschicht stellt Entwicklungs- und Betriebsmittel bereit, und die Anwendungsschicht ist der Ort, an dem die eigentlichen Anwendungen laufen. Jede Schicht hat ihre spezifischen Aufgaben und Funktionen und bildet zusammen ein vollständiges Cloud-System.

Betriebsmodelle:
Sie kennen die drei Betriebsmodelle und können Sie erklären.

IaaS (Infrastructure as a Service):
•	Bei IaaS handelt es sich um die grundlegende Cloud-Serviceebene. Hier wird Ihnen die physische oder virtuelle Hardware, wie Server, Speicher und Netzwerkinfrastruktur, als Dienst zur Verfügung gestellt.
•	Sie sind für die Konfiguration, Verwaltung und Wartung des Betriebssystems und der darauf ausgeführten Softwareanwendungen verantwortlich.
•	IaaS ist besonders nützlich, wenn Sie die volle Kontrolle über Ihre Infrastruktur benötigen, aber nicht die physische Hardware selbst besitzen oder verwalten möchten.

PaaS (Platform as a Service):
•	Bei PaaS wird sowohl die Infrastruktur als auch die Plattform für die Entwicklung und Bereitstellung von Anwendungen als Dienst bereitgestellt.
•	Sie müssen sich weniger um die zugrunde liegende Infrastruktur und das Betriebssystem kümmern und können sich stärker auf die Entwicklung und Implementierung Ihrer Anwendungen konzentrieren.
•	PaaS ist ideal für Entwickler, die schnell Anwendungen entwickeln und bereitstellen möchten, ohne sich um die Infrastruktur kümmern zu müssen.

SaaS (Software as a Service):
•	Bei SaaS erhalten Sie vollständige Softwareanwendungen als Dienst, die über das Internet genutzt werden können.
•	Sie müssen sich weder um die Infrastruktur noch um die Plattform sorgen. Sie verwenden einfach die Anwendung.
•	SaaS-Anwendungen reichen von E-Mail und Office-Produktivitätssoftware bis hin zu CRM- und Collaboration-Tools.
•	SaaS ist ideal für Endbenutzer, da sie sich nur auf die Verwendung der Anwendung konzentrieren müssen, ohne sich um die technischen Details dahinter kümmern zu müssen.

In einfachen Worten: IaaS bietet Ihnen Hardware-Ressourcen, PaaS stellt Entwicklungsplattformen bereit, und SaaS bietet Ihnen voll funktionsfähige Softwareanwendungen. Je nach Ihren Anforderungen und Fähigkeiten können Sie eines dieser Betriebsmodelle in der Cloud auswählen.


Sie kennen die Unterteilung zwischen Public und Private Cloud und können Sie erklären.
In einfachen Worten: Die Public Cloud ist wie ein öffentlicher Park, den jeder nutzen kann, während die Private Cloud wie Ihr privater Garten ist, den Sie selbst verwalten und für sich behalten. Die Wahl zwischen den beiden hängt von Ihren spezifischen Anforderungen an Datenschutz, Sicherheit und Skalierbarkeit ab. Einige Unternehmen nutzen auch hybride Lösungen, die eine Kombination aus Public und Private Cloud nutzen, um das Beste aus beiden Welten zu vereinen.

Sie können Beispiele zu den Betriebsmodellen nennen.

IAAS:
•	AWS
•	Microsoft Azure
•	Google Compute Engine

PAAS:
•	Heroku
•	Google App Engine
•	Microsoft Azure App Service

SAAS:
•	Salesforce
•	Microsoft 365
•	Google Workspace


Servicemodelle:
Sie kennen die vier Servicemodelle und können Sie erklären.
FaaS (Function as a Service):
•	FaaS ist wie das Auslagern einzelner Funktionen oder Aufgaben in die Cloud. Sie erstellen und hosten kleine Funktionen, die bei Bedarf ausgeführt werden.
•	Sie zahlen nur für die tatsächlich ausgeführten Funktionen und müssen sich nicht um die Infrastruktur kümmern.
•	FaaS ist nützlich für serverlose Anwendungen, bei denen die Skalierung automatisch erfolgt.

In einfachen Worten: IaaS bietet Hardware-Ressourcen, PaaS bietet Entwicklungsplattformen, SaaS bietet voll funktionsfähige Softwareanwendungen, und FaaS bietet die Möglichkeit zur serverlosen Ausführung von Funktionen. Je nach Ihren Anforderungen und Fähigkeiten können Sie eines dieser Servicemodelle in der Cloud auswählen.

Sie wissen welches Servicemodell auf einem anderen aufbaut (z.B. PaaS auf IaaS).
PaaS auf IaaS:
•	PaaS baut auf IaaS auf. Das bedeutet, dass PaaS-Dienste die IaaS-Infrastruktur verwenden, um ihre Plattformen bereitzustellen.
•	In einem PaaS-Modell erhalten Entwickler eine komplette Entwicklungs- und Bereitstellungsplattform, die auf der IaaS-Infrastruktur läuft.
•	IaaS stellt die zugrunde liegende virtuelle Hardware und das Netzwerk bereit, während PaaS die Entwicklung, Bereitstellung und Skalierung von Anwendungen vereinfacht.

SaaS auf PaaS:
•	SaaS baut auf PaaS auf. SaaS-Anwendungen verwenden die PaaS-Plattform, um gehostet und bereitgestellt zu werden.
•	Die PaaS-Plattform bietet die notwendige Umgebung für die Ausführung von SaaS-Anwendungen, ohne dass die Entwickler die zugrunde liegende Infrastruktur und Plattform verwalten müssen.
•	SaaS-Anbieter konzentrieren sich auf die Entwicklung und Wartung der Anwendungen, während die PaaS-Plattform die darunter liegende Technologie bereitstellt.

FaaS auf PaaS:
•	FaaS kann auf PaaS aufbauen. In einem FaaS-Modell können Entwickler individuelle Funktionen in einer PaaS-Umgebung hosten.
•	Die PaaS-Plattform bietet die erforderlichen Tools und Dienste, um die Entwicklung und Bereitstellung von Funktionen zu vereinfachen.
•	FaaS ist serverlos und verwendet die PaaS-Plattform, um Funktionen bei Bedarf auszuführen, ohne sich um die zugrunde liegende Infrastruktur und Plattform kümmern zu müssen.


Migrationsmodelle:
Sie kennen die Begriffe der Migrationsmodellen.
•	Rehosting: Beim Rehosting werden Anwendungen oder Systeme in eine Cloud- oder neue Umgebung verschoben, ohne sie wesentlich zu ändern. Dies kann bedeuten, dass physische Server zu virtuellen Maschinen migriert werden oder dass lokale Anwendungen in die Cloud verschoben werden. Ziel ist es, die bestehende Funktionalität zu erhalten, Kosten zu senken und Skalierbarkeit zu verbessern.

•	Refactoring (Replatforming): Beim Refactoring werden Anwendungen oder Systeme angepasst und optimiert, um die Vorteile der Cloud besser nutzen zu können. Dies kann die Umstellung auf cloud-native Dienste und Technologien umfassen, um die Leistung und Skalierbarkeit zu steigern.

•	Rearchitecting (Rebuilding): Rearchitecting ist eine tiefgreifende Umgestaltung von Anwendungen oder Systemen, um sie cloud-native zu gestalten. Dies beinhaltet oft das Neuschreiben von Anwendungen, um von den Vorteilen der Cloud wie Automatisierung, Skalierbarkeit und Flexibilität zu profitieren.

•	Repurchasing: Beim Repurchasing ersetzen Unternehmen bestehende Anwendungen oder Systeme durch bereits vorhandene SaaS-Lösungen. Anstatt Anwendungen selbst zu entwickeln und zu betreiben, nutzen sie eine externe SaaS-Lösung.

•	Retiring: Bei der Außerbetriebnahme handelt es sich nicht wirklich um eine Migration, sondern um das geplante Auslaufenlassen von Anwendungen oder Systemen, die nicht mehr benötigt werden.

•	Retaining: Manchmal entscheiden sich Unternehmen, Anwendungen oder Systeme beizubehalten und geringfügige Anpassungen oder Aktualisierungen vorzunehmen, um ihre Funktionalität und Integration in die Cloud zu verbessern.

Sie kennen die Zielplattform der Migrationsmodellen.
•	Rehosting (Lift and Shift): Zielplattform - Cloud-Infrastruktur oder eine neue Umgebung, in der die bestehenden Anwendungen oder Systeme ohne wesentliche Änderungen betrieben werden.

•	Refactoring (Replatforming): Zielplattform - Cloud-Infrastruktur, auf der Anwendungen optimiert und angepasst werden, um die Vorteile der Cloud besser zu nutzen.

•	Rearchitecting (Rebuilding): Zielplattform - Cloud-Infrastruktur, auf der Anwendungen von Grund auf neu entwickelt oder tiefgreifend umgestaltet werden, um cloud-native zu sein.

•	Repurchasing (Replacing): Zielplattform - SaaS-Lösungen von Drittanbietern, die vorhandene Anwendungen oder Systeme ersetzen.

•	Retiring (Decommissioning): Zielplattform - Es gibt keine Zielplattform, da die Anwendungen oder Systeme einfach auslaufen und nicht mehr genutzt werden.

•	Retaining (Revising): Zielplattform - Cloud-Infrastruktur, auf der bestehende Anwendungen geringfügig angepasst oder aktualisiert werden, um ihre Leistung und Integration in die Cloud zu verbessern.

Speichermodelle:
Sie kennen die vier Speichermodelle
•	Blockspeicher (Block Storage): Blockspeicher ist wie ein digitales Legosystem. Daten werden in gleichgroße Blöcke unterteilt und können unabhängig voneinander gespeichert und abgerufen werden. Dieses Modell eignet sich gut für Aufgaben, bei denen hohe Leistung und Zuverlässigkeit erforderlich sind, wie Datenbanken und virtuelle Maschinen.

•	Dateispeicher (File Storage): Dateispeicher ähnelt einem digitalen Dateisystem. Hier werden Dateien in Ordnern und Unterordnern organisiert, ähnlich wie auf einem Computer. Dateispeicher ist nützlich, wenn es darum geht, Dateien gemeinsam zu nutzen, zu organisieren und zu verwalten, wie zum Beispiel in einem gemeinsamen Dateisystem.



•	Objektspeicher (Object Storage): Objektspeicher ist wie ein digitaler Datencontainer. Hier werden Daten als Objekte mit Metadaten und eindeutigen Identifikatoren gespeichert. Objektspeicher eignet sich gut für die Speicherung großer Mengen unstrukturierter Daten, wie Bilder, Videos und Backups.

•	Blockspeicher (Cloud Storage):Cloud-Speicher ist wie Speicherplatz in der Cloud. Sie können Daten in der Cloud speichern und von überall auf sie zugreifen. Dieses Modell bietet Skalierbarkeit und Zugänglichkeit von überall her und wird oft für die Datensicherung, Archivierung und den Austausch verwendet.

Sie wissen für welchen Einsatz die Speichermodelle sinnvoll Verwendung finden.
•	Blockspeicher (Block Storage): Sinnvoller Einsatz: Block Storage eignet sich gut für Aufgaben, bei denen hohe Leistung und Datenintegrität erforderlich sind, wie Datenbanken und virtuelle Maschinen. Es ermöglicht das Speichern und Abrufen von Daten in kleinen, unabhängigen Blöcken.

•	Dateispeicher (File Storage): Sinnvoller Einsatz: Dateispeicher ist ideal für die gemeinsame Nutzung und Verwaltung von Dateien und Ordnern in einer hierarchischen Struktur. Es wird häufig in Unternehmen verwendet, um gemeinsam genutzte Dateien und Dokumente zu speichern.

•	Objektspeicher (Object Storage): Sinnvoller Einsatz: Objektspeicher eignet sich hervorragend für die Speicherung großer Mengen unstrukturierter Daten, wie Bilder, Videos, Backups und Archivdaten. Es ermöglicht das Speichern von Daten in flexiblen und skalierbaren Containern.

•	Cloud-Speicher (Cloud Storage): Sinnvoller Einsatz: Cloud-Speicher eignet sich für die Speicherung von Daten in der Cloud und den bequemen Zugriff von überall aus. Es ist nützlich für die Datensicherung, Archivierung, den Datenaustausch und die Kollaboration.

Sie können Beispiele zur Benutzung der Speichermodelle geben.
Blockspeicher (Block Storage):
•	Datenbanken: Block Storage wird oft für die Speicherung von Datenbanken verwendet, da sie eine hohe Leistung und Datenkonsistenz erfordern. Jede Datenbanktransaktion entspricht einem Block.

•	Virtuelle Maschinen: Virtuelle Maschinen in Cloud-Umgebungen verwenden oft Block Storage für die Speicherung ihres Betriebssystems und ihrer Anwendungen. Dies ermöglicht das schnelle Starten und Stoppen von VMs.

Dateispeicher (File Storage):
•	Unternehmensdateifreigabe: Unternehmen nutzen Dateispeicher, um Dateien und Dokumente in einer gemeinsamen Hierarchie zu organisieren und für Mitarbeiter freizugeben. Dies erleichtert die Zusammenarbeit.

•	Medieninhalte: Dateispeicher wird verwendet, um Medieninhalte wie Bilder und Videos zu speichern, die von verschiedenen Benutzern gemeinsam genutzt werden können.

Objektspeicher (Object Storage):
•	Datensicherung und Archivierung: Objektspeicher wird für die sichere Langzeitspeicherung von Daten, Backups und Archivierungszwecken eingesetzt.

•	Cloud-Speicherdienste: Dienste wie Dropbox und Google Drive verwenden Objektspeicher, um große Mengen von Benutzerdaten zu speichern und von überall aus zugänglich zu machen.

Cloud-Speicher (Cloud Storage):
•	Persönliche Datensicherung: Individuen können Cloud-Speicherdienste wie iCloud oder Google Drive verwenden, um ihre persönlichen Daten, Fotos und Dokumente in der Cloud zu sichern.

•	Dateiaustausch und Kollaboration: Cloud-Speicher wird für den Dateiaustausch und die Zusammenarbeit in Teams verwendet, wodurch Benutzer von verschiedenen Orten aus auf dieselben Dateien zugreifen können.

Sie kennen den Unterschied zwischen persistentem und flüchtigem Speicher und können diesen erklären, speziell im Zusammenhang mit virtuellen Instanzen.
In einfachen Worten: Persistenter Speicher ist wie ein langlebiges Lager, in dem Daten überleben, während flüchtiger Speicher eher wie ein Post-it-Zettel ist, auf dem temporäre Informationen notiert werden. In virtuellen Instanzen sind persistenter Speicher (z.B. Festplatten) wichtig für dauerhafte Daten, während flüchtiger Speicher (RAM) für vorübergehende Verarbeitungen verwendet wird.

Sie kennen den Unterschied der Lese- und Schreibgeschwindigkeiten der Speichermodelle.

Lesegeschwindigkeit (Read Speed):
•	Die Lesegeschwindigkeit gibt an, wie schnell Daten aus dem Speicher gelesen werden können.
•	Hohe Lesegeschwindigkeiten bedeuten, dass Daten schnell aus dem Speicher abgerufen werden können, was sich positiv auf die Leistung auswirkt, insbesondere wenn es darum geht, Informationen zu lesen oder abzurufen.

Schreibgeschwindigkeit (Write Speed):
•	Die Schreibgeschwindigkeit gibt an, wie schnell Daten in den Speicher geschrieben werden können.
•	Hohe Schreibgeschwindigkeiten bedeuten, dass Daten schnell in den Speicher geschrieben werden können, was wichtig ist, wenn es darum geht, Daten zu speichern oder zu aktualisieren.

Im Zusammenhang mit den verschiedenen Speichermodellen:

Persistenter Speicher (z.B. Festplatten): Persistenter Speicher bietet oft eine gute Lesegeschwindigkeit für das schnelle Abrufen von gespeicherten Daten. Schreibgeschwindigkeiten können jedoch langsamer sein, insbesondere bei herkömmlichen Festplatten.
Flüchtiger Speicher (RAM): Flüchtiger Speicher, wie der RAM, bietet sowohl hohe Lese- als auch Schreibgeschwindigkeiten, was wichtig ist, um temporäre Daten während des Betriebs schnell zu verarbeiten.

Cloud- oder Objektspeicher: Die Geschwindigkeiten können je nach Dienst und Konfiguration variieren. In der Regel ist die Lesegeschwindigkeit relativ hoch, während die Schreibgeschwindigkeit von Faktoren wie der Netzwerkanbindung und der Speicherinfrastruktur abhängt.
