<?php

namespace App\Mail;

use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ReservationMail extends Mailable
{
    use Queueable, SerializesModels;
    private $reservation;
    /**
     * Create a new message instance.
     */
    public function __construct($reservation)
    {
        $this->reservation = $reservation;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Tu reserva en ' . $this->reservation->restaurante->nombre . ' ha sido ' . ($this->reservation->aprovada ? 'confirmada' : 'enviada'),
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        $date =new Carbon($this->reservation->h_reserva);
        $data =
        [
            'dia' => $date->toFormattedDateString(),
            'hora' => $date->toTimeString(),
            'nombre' => $this->reservation->restaurante->nombre,
            'confirmada' => $this->reservation->aprovada,
        ];
        return new Content(
            view: 'emails.reservation_user',
            with: $data,
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
