from twilio.rest import Client

from django.conf import settings

account_sid = settings.TWILIO_ACCOUNT_SID
auth_token = settings.TWILIO_AUTH_TOKEN
messaging_service_sid = settings.TWILIO_MESSAGING_SERVICE_ID
verification_service_sid = settings.TWILIO_VERIFICATION_SERVICE_ID


def send_sms(to_number, message):
	client = Client(account_sid, auth_token)
	
	sms = client.messages.create(
		messaging_service_sid=messaging_service_sid,
		body=message,
		to=to_number,
	)
	
	return sms.sid


def send_verification_token_sms(to_number):
	client = Client(account_sid, auth_token)
	
	verification = client.verify.services(verification_service_sid).\
		verifications.create(to=to_number, channel='sms')
	
	return verification.status


def check_verification_token(to_number, code):
	client = Client(account_sid, auth_token)
	try:
		verification_check = client.verify.services(verification_service_sid). \
			verification_checks.create(to=to_number, code=str(code))
	except:
		return False
	return verification_check.status
